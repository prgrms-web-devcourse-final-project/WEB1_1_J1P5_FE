import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "components/atoms";
import { MyPageTemplate } from "components/templates";
import { useHeaderStore, useUserStore } from "stores";
import { getUserProfile, oauthLogout, withdraw } from "services/apis";
import { useModalForm } from "hooks";

export const MyPage = () => {
  const { setTitle } = useHeaderStore();
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const { confirm } = useModalForm();

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
    confirm("로그아웃 하시겠습니까?", () => {
      oauthLogout()
        .then(() => {
          setUser(null);
          location.reload();
        })
        .catch((error) => {
          Toast.show("잠시 후에 다시 시도해주세요.", 2000);
          console.error("Logout failed", error);
        });
    });
  }, [confirm, setUser]);

  const handleWithdraw = useCallback(() => {
    confirm("정말 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.", () => {
      withdraw()
        .then(() => {
          setUser(null);
          location.reload();
        })
        .catch((error) => {
          Toast.show("잠시 후에 다시 시도해주세요.", 2000);
          console.error("Withdraw failed", error);
        });
    });
  }, [confirm, setUser]);

  if (!user) {
    return null;
  }
  return (
    <MyPageTemplate
      imgUrl={user!.profile as string}
      nickname={user!.nickname as string}
      location={user!.emdName as string}
      onProfileEditButtonClick={handleProfileEditButtonClick}
      onMenuClick={handleMenuClick}
      onLogout={handleLogout}
      onServiceExit={handleWithdraw}
    />
  );
};
