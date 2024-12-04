//import CryptoJS from "crypto-js";

//import Utf8 from "crypto-js/enc-utf8";

// 암호화 후 대체할 문자
// const substitutionsAfterEncryption: Map<string, string> = new Map([
//   ["+", "-"],
//   ["/", "_"],
//   ["=", "~"],
// ]);

// 복호화 전 복원할 문자
// const substitutionsBeforeDecryption: Map<string, string> = new Map([
//   ["-", "+"],
//   ["_", "/"],
//   ["~", "="],
// ]);

export const encryptRoomId = (roomId: string): string => {
  return roomId;
  // const secretKey = "YOUR_SECRET_KEY";
  // const encrypted = CryptoJS.AES.encrypt(roomId, secretKey).toString();

  // // return encrypted.replace(
  // //   /[+/=]/g, // Base64의 특수 문자 매칭
  // //   (match: string) => substitutionsAfterEncryption.get(match) ?? match
  // // );
};

export const decryptRoomId = (encrypted: string): string => {
  return encrypted;
  /*
  const toDecrypt = encrypted.replace(
    /[-_~]/g, // URL-safe로 변환된 문자 매칭
    (match: string) => substitutionsBeforeDecryption.get(match) ?? match
  );
  const secretKey = "YOUR_SECRET_KEY";
  return CryptoJS.AES.decrypt(toDecrypt, secretKey).toString(Utf8);
  */
};
