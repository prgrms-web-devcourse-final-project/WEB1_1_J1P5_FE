import type { IResponse } from "types";

/**
 * Session Check Response
 */
export interface ISessionUserResponse extends IResponse {
  result: {
    /** 인증한 읍면동 */
    ActivityEmdName: string | null;
    /** 프로필 이미지 URL */
    imageUrl: string | null;
    /** 닉네임 */
    nickname: string | null;
  };
}

/**
 * Profile Response
 */
export interface IUserProfileResponse extends IResponse {
  result: {
    /** 인증한 읍면동 */
    activityEmdName: string | null;
    /** 프로필 이미지 URL */
    imageUrl: string | null;
    /** 닉네임 */
    nickname: string | null;
  };
}

/**
 * Profile 등록 / 수정 Request Body
 */
export interface IUserProfileData {
  name: string | null;
  image?: File | string | null;
}
