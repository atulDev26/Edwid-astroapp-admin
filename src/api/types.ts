// Payload Types
export interface EncryptedPayload {
    data: string;
}

export type RequestPayload = Record<string, unknown> | FormData;

export interface ApiResponse<T = unknown> {
    data: T;
    responseCode: number;
    message: string;
    status: "success" | "failed";
    token?: string;
}

export interface ApiErrorResponse {
    data: null;
    responseCode: number;
    message: string;
    status: "failed";
    token?: string;
}

export type ApiResult<T = unknown> = ApiResponse<T> | ApiErrorResponse;
