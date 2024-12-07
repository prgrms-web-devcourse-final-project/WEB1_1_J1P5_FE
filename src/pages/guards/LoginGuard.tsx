import { Navigate } from "react-router-dom";
import { useUserStore } from "stores";
import { useEffect } from "react";
import { getUserProfile } from "services/apis";

interface ILoginGuardProps {
  children: React.ReactNode;
}

/**
 * 로그인한 사용자가 로그인 페이지 접근 시 처리
 */
export const LoginGuard = ({ children }: ILoginGuardProps) => {
  const { user } = useUserStore();

  useEffect(() => {
    getUserProfile().then(console.log).catch(console.error);
  }, []);

  if (user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
