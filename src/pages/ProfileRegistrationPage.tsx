import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileRegistrationTemplate } from "components/templates";
import { useTopBarStore, useUserStore } from "stores";
import { registerAndEditProfile } from "services/apis";
import type { IUser, IUserProfileData } from "types";

export const ProfileRegistrationPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { clear, setTitle } = useTopBarStore();

  const handleProfileRegistration = (data: IUser) => {
    console.log(user);
    console.log(data);
    // nickname은 검사하고 오기 때문에 타입 어설션 사용
    const nickname = data.nickname!;
    const profile = data.profile;
    const requestData: IUserProfileData = {
      name: nickname,
    };

    if (typeof profile !== "string") {
      requestData.image = profile || null;
    }

    // TODO API 확정 이후 수정
    registerAndEditProfile(requestData)
      .then((data) => {
        console.log(data);
        // 저장 완료 내역을 클라이언트에도 적용
        // const { result } = data;
        // setUser(result);

        navigate(!user?.emdId ? "/neighborhood-selection" : "/my-page", {
          replace: true,
        });
      })
      .catch((error) => {
        // 아마도 닉네임 중복확인??
        console.error(error);
      });
  };

  useEffect(() => {
    clear();
    setTitle("프로필 등록");
  }, []);

  return (
    <ProfileRegistrationTemplate
      user={user || undefined}
      onSubmit={handleProfileRegistration}
    />
  );
};
