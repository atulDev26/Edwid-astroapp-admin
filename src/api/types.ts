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

// User Types
export type UserStatus = 'Active' | 'Inactive' | 'Blocked';
export const STATUS_OPTIONS: UserStatus[] = ['Active', 'Inactive', 'Blocked'];

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    registered: string;
    walletBalance: number;
    totalSpend: number;
    status: UserStatus;
    lastActive: string;
    avatar: string;
}

