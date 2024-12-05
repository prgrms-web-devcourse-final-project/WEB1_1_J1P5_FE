import type { IResponse } from "types";

/**
 * Profile Response
 */
export interface IUserProfileResponse extends IResponse {
  result: null;
}

/**
 * Profile 등록 / 수정 Request Body
 */
export interface IUserProfileData {
  nickname: string | null;
  profile: File | string | null;
}
