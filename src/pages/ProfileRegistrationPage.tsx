import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileRegistrationTemplate } from "components/templates";
import { useTopBarStore, useUserStore } from "stores";
import { editProfile, registerProfile } from "services/apis";
import type { IUser, IUserProfileData } from "types";

export const ProfileRegistrationPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { setTitle } = useTopBarStore();

  const handleProfileRegistration = (data: IUser) => {
    console.log(user);
    console.log(data);
    // 닉네임 등록 상태로 첫 번째 로그인(프로필 등록 안한 사용자)인지 구분
    const isFirstLogin = !user?.nickname;
    // nickname은 검사하고 오기 때문에 타입 어설션 사용
    const nickname = data.nickname!;
    const profile = data.profile;
    const requestData: IUserProfileData = { nickname };

    if (typeof profile !== "string") {
      // profile이 이미 있던 프로필이 아니라면 requestData에 담기!
      requestData.profile = profile;
    }

    // TODO API 확정 이후 수정
    (isFirstLogin ? registerProfile : editProfile)(requestData)
      .then((data) => {
        console.log(data);
        // 저장 완료 내역을 클라이언트에도 적용
        // const { result } = data;
        // setUser(result);
        navigate(isFirstLogin ? "/neighborhood-selection" : "/my-page", {
          replace: true,
        });
      })
      .catch((error) => {
        // 아마도 닉네임 중복확인??
        console.error(error);
      });
  };

  useEffect(() => {
    setTitle("프로필 등록");
  }, []);

  return (
    <ProfileRegistrationTemplate
      user={user}
      onSubmit={handleProfileRegistration}
    />
  );
};
