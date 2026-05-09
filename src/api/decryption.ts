import CryptoJS from "crypto-js";

export const getDecryptData = (encryptData: string | null) => {
    if (encryptData == null) return null;
    const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;
    const decrypted = CryptoJS.AES.decrypt(encryptData, encryptionKey);
    const data = decrypted.toString(CryptoJS.enc.Utf8);
    let result;
    try {
        result = JSON.parse(data);
    } catch {
        result = data;
    }
    return result;
}