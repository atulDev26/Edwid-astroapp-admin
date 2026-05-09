import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import CryptoJS from "crypto-js";
import { TOKEN, setToken, clearSecureStorage } from "./localStorageKeys";
import { getDecryptData } from "./decryption";
import type { ApiResult, RequestPayload, EncryptedPayload } from "./types";

const ENABLE_SECURITY =
    (import.meta.env.VITE_ENABLE_SECURITY || "false")
        .toString()
        .toLowerCase() === "true";

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").trim();
const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

let isRedirecting = false;

const handleUnauthorized = () => {
    if (isRedirecting) return;

    const lastRedirect = sessionStorage.getItem('last_unauth_redirect');
    const now = Date.now();
    if (lastRedirect && now - parseInt(lastRedirect) < 5000) {
        clearSecureStorage();
        return;
    }
    sessionStorage.setItem('last_unauth_redirect', now.toString());

    isRedirecting = true;
    clearSecureStorage();
    window.location.href = "/";
};

const preparePayload = (
    postData: RequestPayload
): RequestPayload | EncryptedPayload => {
    if (
        ENABLE_SECURITY &&
        ENCRYPTION_KEY &&
        !(postData instanceof FormData)
    ) {
        const encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(postData ?? {}),
            ENCRYPTION_KEY
        ).toString();

        return { data: encrypted };
    }

    return postData;
};

const apiClient = axios.create({
    baseURL: BASE_URL,
    paramsSerializer: {
        serialize: (params) => {
            const searchParams = new URLSearchParams();
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    searchParams.append(key, String(value));
                }
            });
            return searchParams.toString().replace(/\+/g, '%20');
        }
    }
});


apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const url = config.url || "";
        const token = TOKEN();
        const publicRoutes = [
            "auth/login",
            "auth/otp-send",
            "auth/auto-login",
        ];
        const relativeUrl = url.replace(BASE_URL, "").replace(/^\/+/, "");

        const isPublicRoute = publicRoutes.some(
            (route) => relativeUrl === route || relativeUrl.startsWith(route + "/")
        );

        if (!isPublicRoute && (!token || token.trim() === "")) {
            handleUnauthorized();
            return Promise.reject(new Error("Unauthorized - No token found"));
        }

        config.headers.set("Accept", "application/json");
        config.headers.set("x-app-id", import.meta.env.VITE_APP_ID);
        config.headers.set("x-app-version", import.meta.env.VITE_APP_VERSION);
        config.headers.set("x-app-platform", import.meta.env.VITE_APP_PLATFORM);

        if (token) {
            const finalToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
            config.headers.set("Authorization", finalToken);
        }

        if (!ENABLE_SECURITY) {
            config.params = {
                ...config.params,
                encryption: "false",
            };
        }

        if (
            ENABLE_SECURITY &&
            ENCRYPTION_KEY &&
            (config.method === "get" || config.method === "delete")
        ) {
            try {
                const fullUrl = url.startsWith("http")
                    ? url
                    : `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

                const urlObj = new URL(fullUrl);
                const pathAndSearch = urlObj.pathname + urlObj.search;

                const hash = CryptoJS.AES.encrypt(
                    pathAndSearch,
                    ENCRYPTION_KEY
                ).toString();

                config.headers.set("hash", hash);
            } catch {
                const fallbackHash = CryptoJS.AES.encrypt(
                    url,
                    ENCRYPTION_KEY
                ).toString();

                config.headers.set("hash", fallbackHash);
            }
        }

        if (config.data && !(config.data instanceof FormData)) {
            config.data = preparePayload(config.data);

            if (!config.headers.get("Content-Type")) {
                config.headers.set("Content-Type", "application/json");
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
    (response: AxiosResponse<ApiResult>): AxiosResponse<ApiResult> | Promise<AxiosResponse<ApiResult>> => {
        const { data, headers } = response;

        // Check headers first (standard)
        let authHeader = headers["authorization"] || headers["Authorization"];

        // Fallback to body token if header is missing (CORS issues)
        if (!authHeader && data?.token) {
            authHeader = data.token;
        }

        if (authHeader) {
            setToken(authHeader);
        }


        if (data?.responseCode === 501) {
            handleUnauthorized();

            return Promise.reject<ApiResult>({
                data: null,
                responseCode: 501,
                message: "Session expired",
                status: "failed",
            }) as unknown as Promise<AxiosResponse<ApiResult>>;
        }

        let finalData = data;

        if (data?.data && ENABLE_SECURITY) {
            finalData = {
                ...data,
                data: getDecryptData(data.data as string),
            };
        }

        return finalData as unknown as AxiosResponse<ApiResult>;
    },
    (error: AxiosError): Promise<AxiosResponse<ApiResult>> => {
        if (error.response) {
            // Check if the response is HTML (often returned on server crashes)
            const isHtml = typeof error.response.data === 'string' &&
                (error.response.data.includes('<!DOCTYPE html>') ||
                    error.response.data.includes('<html'));

            if (isHtml) {
                return Promise.reject<ApiResult>({
                    data: null,
                    responseCode: error.response.status,
                    message: "The server encountered an unexpected error. Please try again later.",
                    status: "failed",
                }) as unknown as Promise<AxiosResponse<ApiResult>>;
            }

            if (error.response.status === 401) {
                handleUnauthorized();

                return Promise.reject<ApiResult>({
                    data: null,
                    responseCode: 401,
                    message: "Unauthorized - Please login again",
                    status: "failed",
                }) as unknown as Promise<AxiosResponse<ApiResult>>;
            }

            return Promise.reject<ApiResult>(
                (error.response.data as ApiResult) || {
                    data: null,
                    responseCode: error.response.status,
                    message: error.message,
                    status: "failed",
                }
            ) as unknown as Promise<AxiosResponse<ApiResult>>;
        }

        return Promise.reject<ApiResult>({
            data: null,
            responseCode: 500,
            message: error.message,
            status: "failed",
        }) as unknown as Promise<AxiosResponse<ApiResult>>;
    }
);

const formatError = <T>(error: unknown): ApiResult<T> => {
    if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        "message" in error
    ) {
        // If message is HTML, replace it
        if (typeof error.message === 'string' && (error.message.includes('<!DOCTYPE html>') || error.message.includes('<html'))) {
            return {
                ...error,
                message: "A server error occurred. Please try again later."
            } as ApiResult<T>;
        }
        return error as ApiResult<T>;
    }

    let message = "An unexpected error occurred";
    if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === 'string') {
        message = error;
    }

    // Final safety check for HTML in message
    if (message.includes('<!DOCTYPE html>') || message.includes('<html')) {
        message = "The server encountered an internal error.";
    }

    return {
        data: null,
        responseCode: 500,
        message: message,
        status: "failed",
    };
};


export const postApi = async <T = unknown>(
    url: string,
    data: RequestPayload
): Promise<ApiResult<T>> => {
    try {
        return await apiClient.post<ApiResult<T>>(url, data) as unknown as ApiResult<T>;
    } catch (error) {
        return formatError<T>(error);
    }
};

export const imageUploadApi = async <T = unknown>(
    url: string,
    data: FormData
): Promise<ApiResult<T>> => {
    try {
        return await apiClient.post<ApiResult<T>>(url, data) as unknown as ApiResult<T>;
    } catch (error) {
        return formatError<T>(error);
    }
};

export const getApi = async <T = unknown>(
    url: string,
    params?: Record<string, unknown>
): Promise<ApiResult<T>> => {
    try {
        return await apiClient.get<ApiResult<T>>(url, { params }) as unknown as ApiResult<T>;
    } catch (error) {
        return formatError<T>(error);
    }
};

export const putApi = async <T = unknown>(
    url: string,
    data: RequestPayload
): Promise<ApiResult<T>> => {
    try {
        return await apiClient.put<ApiResult<T>>(url, data) as unknown as ApiResult<T>;
    } catch (error) {
        return formatError<T>(error);
    }
};

export const patchApi = async <T = unknown>(
    url: string,
    data: RequestPayload
): Promise<ApiResult<T>> => {
    try {
        return await apiClient.patch<ApiResult<T>>(url, data) as unknown as ApiResult<T>;
    } catch (error) {
        return formatError<T>(error);
    }
};

export const deleteApi = async <T = unknown>(
    url: string
): Promise<ApiResult<T>> => {
    try {
        return await apiClient.delete<ApiResult<T>>(url) as unknown as ApiResult<T>;
    } catch (error) {
        return formatError<T>(error);
    }
};
