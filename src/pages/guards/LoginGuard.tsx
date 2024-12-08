import { Navigate } from "react-router-dom";
import { Suspense } from "react";
import { useFetchSession } from "hooks";

interface ILoginGuardProps {
  children: React.ReactNode;
}

/**
 * 로그인한 사용자가 로그인 페이지 접근 시 처리
 */
export const LoginGuard = ({ children }: ILoginGuardProps) => {
  const { sessionUser, isLoading } = useFetchSession();

  if (isLoading) {
    return null;
  }

  if (sessionUser) {
    return <Navigate to="/" replace />;
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};
