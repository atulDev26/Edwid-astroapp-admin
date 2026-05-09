import CryptoJS from "crypto-js";

const SECRET = import.meta.env.VITE_ENCRYPTION_KEY;

/**
 * Dynamic Storage Keys
 * These can be overridden in the .env file.
 */
const PROJECT_NAME = (import.meta.env.VITE_PROJECT_NAME || "app").toLowerCase().replace(/\s+/g, '-');

export const STORAGE_KEYS = {
    TOKEN: import.meta.env.VITE_STORAGE_TOKEN_KEY || `${PROJECT_NAME}-token`,
    ADMIN_AUTH: import.meta.env.VITE_STORAGE_ADMIN_AUTH_KEY || `${PROJECT_NAME}-adminAuth`,
    USER_ID: import.meta.env.VITE_STORAGE_USER_ID_KEY || `${PROJECT_NAME}-userId`,
    PASSWORD: import.meta.env.VITE_STORAGE_PASSWORD_KEY || `${PROJECT_NAME}-password`,
    USER_DATA: import.meta.env.VITE_STORAGE_USER_DATA_KEY || `${PROJECT_NAME}-userData`,
};

const IS_PROD = import.meta.env.PROD;

/**
 * Encrypts and saves any value to localStorage
 */
export const setEncryptedItem = (key: string, value: unknown): void => {
    if (value === null || value === undefined) return;
    const stringValue = typeof value === "object" ? JSON.stringify(value) : String(value);

    if (IS_PROD && SECRET) {
        const encrypted = CryptoJS.AES.encrypt(stringValue, SECRET).toString();
        localStorage.setItem(key, encrypted);
    } else {
        localStorage.setItem(key, stringValue);
    }
};

/**
 * Retrieves and decrypts any value from localStorage
 */
export const getDecryptedItem = <T = string>(key: string): T | null => {
    const data = localStorage.getItem(key);
    if (!data) return null;

    if (IS_PROD && SECRET) {
        try {
            const bytes = CryptoJS.AES.decrypt(data, SECRET);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            if (!decrypted) return null;

            try {
                return JSON.parse(decrypted) as T;
            } catch {
                return decrypted as unknown as T;
            }
        } catch (e) {
            console.error(`Decryption failed for key: ${key}`, e);
            return null;
        }
    } else {
        // In development or if security is disabled, data is stored as plain text
        try {
            return JSON.parse(data) as T;
        } catch {
            return data as unknown as T;
        }
    }
};

/**
 * Specialized helpers for the Auth Token
 */
export const TOKEN = (): string | null => getDecryptedItem<string>(STORAGE_KEYS.TOKEN);
export const setToken = (token: string): void => setEncryptedItem(STORAGE_KEYS.TOKEN, token);

export const getUserId = (): string | null => getDecryptedItem<string>(STORAGE_KEYS.USER_ID);
export const setUserId = (userId: string): void => setEncryptedItem(STORAGE_KEYS.USER_ID, userId);

export const getPassword = (): string | null => getDecryptedItem<string>(STORAGE_KEYS.PASSWORD);
export const setPassword = (password: string): void => setEncryptedItem(STORAGE_KEYS.PASSWORD, password);

export const getUserData = <T = unknown>(): T | null => getDecryptedItem<T>(STORAGE_KEYS.USER_DATA);
export const setUserData = (data: unknown): void => setEncryptedItem(STORAGE_KEYS.USER_DATA, data);


/**
 * Clears all related secure storage keys
 */
export const clearSecureStorage = (): void => {
    Object.values(STORAGE_KEYS).forEach((key) => {
        localStorage.removeItem(key);
    });
};
