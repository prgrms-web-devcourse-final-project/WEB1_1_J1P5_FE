import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "components/atoms";
import { MyPageTemplate } from "components/templates";
import { useHeaderStore, useUserStore } from "stores";
import { getUserProfile, oauthLogout } from "services/apis";

export const MyPage = () => {
  const { setTitle } = useHeaderStore();
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const handleProfileEditButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const handleMenuClick = useCallback(
    (pathname: string) => {
      navigate(pathname);
    },
    [navigate]
  );

  useEffect(() => {
    setTitle("마이페이지");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getUserProfile()
      .then(({ result }) => {
        setUser({
          nickname: result.nickname || undefined,
          profile: result.imageUrl || undefined,
          emdName: result.activityEmdName || undefined,
        });
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleLogout = useCallback(() => {
    oauthLogout()
      .then(() => {
        setUser(null);
        location.reload();
      })
      .catch((error) => {
        Toast.show("잠시 후에 다시 시도해주세요.", 2000);
        console.error("Logout failed", error);
      });
  }, [navigate, setUser]);

  return (
    <MyPageTemplate
      imgUrl={user!.profile as string}
      nickname={user!.nickname as string}
      location={user!.emdName as string}
      onProfileEditButtonClick={handleProfileEditButtonClick}
      onMenuClick={handleMenuClick}
      onLogout={handleLogout}
    />
  );
};
