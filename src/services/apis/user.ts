import { http } from "services/api";
import type { IUserProfileData, IUserProfileResponse } from "types";

/**
 * 유저 프로필 등록
 * @param nickname
 * @param profile
 */
export const registerProfile = async ({
  nickname,
  profile,
}: IUserProfileData) => {
  return http.post<IUserProfileResponse, IUserProfileData>(
    "/user/profile",
    {
      nickname,
      profile,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};

/**
 * 유저 프로필 수정
 * @param nickname
 * @param profile
 */
export const editProfile = async ({ nickname, profile }: IUserProfileData) => {
  return http.patch<IUserProfileResponse, IUserProfileData>(
    "/user/profile",
    {
      nickname,
      profile,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};
