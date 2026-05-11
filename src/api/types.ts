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

// Monitor Types
export interface Session {
    id: string;
    type: 'chat' | 'call';
    astrologer: {
        name: string;
        image: string;
    };
    user: {
        name: string;
        gender: string;
        dob: string;
        location: string;
    };
    startTime: string;
    duration: string;
    status: string;
    value: string;
}

export interface Completion {
    id: string;
    participant: {
        name: string;
        gender: string;
        dob: string;
        location: string;
    };
    expert: string;
    startTime: string;
    endTime: string;
    status: string;
    duration: string;
    amount: string;
    rating: number | null;
}
