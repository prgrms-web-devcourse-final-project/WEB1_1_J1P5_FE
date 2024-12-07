import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MyPageTemplate } from "components/templates";
import { http } from "services/api";
import { useHeaderStore } from "stores";
import { IResponse } from "types";

interface IProfile {
  /** 프로필 이미지 URL */
  imageUrl: string;
  /** 닉네임 */
  nickname: string;
  /** 인증한 읍면동 */
  activityEmdName: string;
}
interface IProfileResponse extends IResponse {
  result: IProfile;
}

export const MyPage = () => {
  const { setTitle } = useHeaderStore();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<IProfile>({
    imageUrl: "",
    nickname: "",
    activityEmdName: "",
  });

  useEffect(() => {
    setTitle("마이페이지");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: react-query 사용
  const fetchProfile = useCallback(async () => {
    try {
      const response = await http.get<IProfileResponse>("/users/profile");
      if (response.success && response.code === "COMMON200") {
        setProfile(response.result);
      } else {
        console.error("Failed to fetch profile: Invalid response code");
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  }, []);

  useEffect(() => {
    /**
     * fetchProfile에서 에러 catch하는데 여기서 또 할 필요가 없음
     */
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchProfile();
  }, [fetchProfile]);

  const handleProfileEditButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const handleMenuClick = useCallback(
    (pathname: string) => {
      navigate(pathname);
    },
    [navigate]
  );

  return (
    <MyPageTemplate
      imgUrl={profile.imageUrl}
      nickname={profile.nickname}
      location={profile.activityEmdName}
      onProfileEditButtonClick={handleProfileEditButtonClick}
      onMenuClick={handleMenuClick}
    />
  );
};
