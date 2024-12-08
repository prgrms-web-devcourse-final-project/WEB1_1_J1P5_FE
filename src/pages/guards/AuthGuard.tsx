// import { useEffect } from "react";
// import { useUserStore } from "stores";
import { Outlet } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
// import { getUserProfile } from "services/apis";

/**
 * 로그인 되지 않은 사용자가 로그인이 필요한 페이지 접근 시 처리
 */
export const AuthGuard = () => {
  // const { user, setUser } = useUserStore();
  //
  // useEffect(() => {
  //   getUserProfile()
  //     .then(({ result }) => {
  //       setUser({
  //         nickname: result.nickname || undefined,
  //         profile: result.imageUrl || undefined,
  //         emdName: result.activityEmdName || undefined,
  //       });
  //     })
  //     .catch(() => {
  //       // 해당 API에서 에러나면 user 제거
  //       setUser(null);
  //     });
  // }, []);
  //
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  //
  // if (!user.nickname) {
  //   return <Navigate to="/profile" />;
  // }
  //
  // if (!user.emdName) {
  //   return <Navigate to="/neighborhood-selection" />;
  // }

  return <Outlet />;
};
