import axios from "axios";
import type {
  IReportUser,
  ISessionUserResponse,
  IUserProfileData,
  IUserProfileResponse,
} from "types";
import { http } from "services/api";

/**
 * 유저 세션 정보 조회
 */
export const getUserSession = async () => {
  return http.get<ISessionUserResponse>("/users/session");
};

/**
 * 유저 정보 조회
 */
export const getUserProfile = async () => {
  return http.get<IUserProfileResponse>("/users/profile");
};

/**
 * 유저 프로필 등록 / 수정
 * @param name 유저가 입력한 닉네임
 * @param image 유저의 프로필사진
 */

export const registerAndEditProfile = async ({
  name,
  image, // 파일 목록
}: IUserProfileData) => {
  // FormData 생성
  const formData = new FormData();
  // JSON 데이터를 Blob으로 추가
  const json = JSON.stringify({ name: name });
  const blob = new Blob([json], { type: "application/json" });
  formData.append("request", blob);
  // 파일 목록 추가
  if (image) {
    formData.append("image", image); // 파일 필드 이름 "multipart"
  }
  // HTTP 요청 전송
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/users/profile`,
      formData,
      {
        withCredentials: true,
      }
    );
    console.log("Response:", res.data); // 요청 성공 시 응답 데이터 출력
    return res.data; // 요청 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("Error:", error); // 요청 실패 시 에러 출력
    throw error; // 에러를 다시 던져서 호출하는 곳에서 처리할 수 있도록 함
  }
};

/**
 * 신고하기 (댓글 신고, 게시글 신고, 유저 신고)
 * @param title 신고 제목
 * @param content 신고 내용
 * @param reportType 신고 유형 (USER, POST, COMMENT)
 * @param targetId 신고 대상 ID
 * @param images 신고 이미지 목록
 */
export const reportUser = async ({
  title,
  content,
  reportType,
  targetId,
  images, // 파일 목록
}: IReportUser) => {
  // FormData 생성
  const formData = new FormData();
  // JSON 데이터를 Blob으로 추가
  const json = JSON.stringify({ title, content, reportType, targetId });
  const blob = new Blob([json], { type: "application/json" });
  formData.append("request", blob);

  // 이미지 파일 존재하는 경우 이미 파일 목록 추가
  if (images) {
    images.forEach((img) => {
      formData.append("images", img);
    });
  }
  // HTTP 요청 전송
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/reports`,
      formData,
      {
        withCredentials: true,
      }

    );
    console.log("Response:", res.data); // 요청 성공 시 응답 데이터 출력
    return res.data; // 요청 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("Error:", error); // 요청 실패 시 에러 출력
    throw error; // 에러를 다시 던져서 호출하는 곳에서 처리할 수 있도록 함
  }
};

/** 이건 왜 안되는지 모르겠습니다.. -안준우 */
// export const registerAndEditProfile = async ({
//   name,
//   image,
// }: IUserProfileData) => {
//   const formData = new FormData();
//   // JSON 데이터를 Blob으로 추가
//   const json = JSON.stringify({ name: name });

//   const blob = new Blob([json], { type: "application/json" });
//   formData.append("request", blob);

//   // 파일 목록 추가
//   if (image) {
//     formData.append("image", image); // 파일 필드 이름 "multipart"
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return http.post<IUserProfileResponse, any>("/users/profile", {
//     formData,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

/**
 * 회원탈퇴 API
 */
export const withdraw = async () => {
  return http.delete("/users/withdraw");
};
