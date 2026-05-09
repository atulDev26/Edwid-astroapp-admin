import CryptoJS from "crypto-js";

export const getDecryptData = (encryptData: any) => {
    if (encryptData == null) return null;
    const encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY;
    let decrypted = CryptoJS.AES.decrypt(encryptData, encryptionKey);
    let data = decrypted.toString(CryptoJS.enc.Utf8);
    try {
        encryptData = JSON.parse(data);
        // eslint-disable-next-line no-unused-vars
    } catch (e) {
        encryptData = data;
    }
    return encryptData;
}