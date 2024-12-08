import { Navigate, Outlet } from "react-router-dom";
import { useFetchSession } from "hooks";

/**
 * 로그인이 필요하지만 정보가 입력되지 않으면 다른 페이지 접근 불가능한 페이지들
 */
export const RequiredGuard = () => {
  const { sessionUser, isLoading } = useFetchSession();

  if (isLoading) {
    return null;
  }

  if (!sessionUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
