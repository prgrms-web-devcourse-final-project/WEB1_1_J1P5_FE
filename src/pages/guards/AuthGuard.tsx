import { Navigate, Outlet } from "react-router-dom";
import { useFetchSession } from "hooks";
import { useUserStore } from "stores";

/**
 * 로그인 되지 않은 사용자가 로그인이 필요한 페이지 접근 시 처리
 */
export const AuthGuard = () => {
  const { user } = useUserStore();
  const { sessionUser, isLoading } = useFetchSession();

  if (isLoading) {
    return null;
  }

  if (!sessionUser) {
    return <Navigate to="/login" replace />;
  }

  if (!sessionUser.nickname && !user?.nickname) {
    return <Navigate to="/profile" replace />;
  }

  if (!sessionUser.ActivityEmdName && !user?.emdId) {
    return <Navigate to="/neighborhood-selection" replace />;
  }

  return <Outlet />;
};
