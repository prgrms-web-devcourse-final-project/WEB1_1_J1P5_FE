import CryptoJS from "crypto-js";

export const encryptRoomId = (roomId: string): string => {
  const secretKey = "YOUR_SECRET_KEY";
  return CryptoJS.AES.encrypt(roomId, secretKey).toString();
};

export const decryptRoomId = (encrypted: string): string => {
  const secretKey = "YOUR_SECRET_KEY";
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
