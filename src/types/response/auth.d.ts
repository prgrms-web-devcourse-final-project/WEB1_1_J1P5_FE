import type { IResponse } from "types";

export type OAuthProvider = "NAVER" | "KAKAO";

export interface IAuth {
  nickname: string | null;
  profileUrl: string | null;
  emdId: number | null;
  emdName: string | null;
}

export interface IAuthResponse extends IResponse {
  result: IAuth;
}

export interface IAuthData {
  code: string;
  provider: OAuthProvider;
}
