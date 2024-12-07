import { http } from "services/api";
import type { IUserProfileData, IUserProfileResponse } from "types";

/**
 * 유저 프로필 등록 / 수정
 * @param name 유저가 입력한 닉네임
 * @param image 유저의 프로필사진
 */
export const registerAndEditProfile = async ({
  name,
  image,
}: IUserProfileData) => {
  const formData = new FormData();

  formData.append("request", JSON.stringify(name));
  if (image) {
    formData.append("image", image);
  }
  console.log(formData);
  console.log(Array.from(formData.keys()));

  return http.post<IUserProfileResponse, FormData>("/users/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
