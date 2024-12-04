import type { IResponse } from "types";

export type OAuthProvider = "NAVER" | "KAKAO";

export interface IAuthResponse extends IResponse {
  result: {};
}

export interface IAuthData {
  code: string;
  provider: OAuthProvider;
}
