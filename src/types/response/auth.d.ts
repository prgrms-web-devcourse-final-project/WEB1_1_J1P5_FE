import type { IResponse } from "types";

export type OAuthProvider = "NAVER" | "KAKAO";

export interface IAuthResponse extends IResponse {
  // TODO result 확정 이후 수정 필요
  result: {};
}

export interface IAuthData {
  code: string;
  provider: OAuthProvider;
}
