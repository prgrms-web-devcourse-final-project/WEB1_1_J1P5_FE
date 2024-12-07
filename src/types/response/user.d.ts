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
  name: string | null;
  image?: File | string | null;
}
