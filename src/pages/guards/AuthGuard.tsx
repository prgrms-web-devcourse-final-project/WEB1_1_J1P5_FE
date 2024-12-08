import { Navigate, Outlet } from "react-router-dom";
import { useFetchSession } from "hooks";

/**
 * 로그인 되지 않은 사용자가 로그인이 필요한 페이지 접근 시 처리
 */
export const AuthGuard = () => {
  const { sessionUser, isLoading } = useFetchSession();

  if (isLoading) {
    return null;
  }

  if (!sessionUser) {
    return <Navigate to="/login" replace />;
  }

  if (!sessionUser.nickname) {
    return <Navigate to="/profile" replace />;
  }

  if (!sessionUser.ActivityEmdName) {
    return <Navigate to="/neighborhood-selection" replace />;
  }

  return <Outlet />;
};
