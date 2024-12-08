// import { Navigate } from "react-router-dom";
// import { useUserStore } from "stores";
// import { Suspense, useEffect } from "react";
import { Suspense } from "react";
// import { getUserProfile } from "services/apis";

interface ILoginGuardProps {
  children: React.ReactNode;
}

/**
 * 로그인한 사용자가 로그인 페이지 접근 시 처리
 */
export const LoginGuard = ({ children }: ILoginGuardProps) => {
  // const { user } = useUserStore();
  // const { user, setUser } = useUserStore();

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
  //       setUser(null);
  //     });
  // }, []);
  //
  // if (user) {
  //   return <Navigate to="/" />;
  // }

  return <Suspense fallback={null}>{children}</Suspense>;
};
