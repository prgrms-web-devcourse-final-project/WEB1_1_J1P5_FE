import { useEffect } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { oauthLogin } from "services/apis";
import { useUserStore } from "stores";
import type { OAuthProvider } from "types";

// 임시
const response = {
  result: {
    nickname: undefined,
    profile: undefined,
    anything: "123123",
  },
} as const;

export const OAuthCallbackPage = () => {
  // TODO 직접 접근 막기
  const navigate = useNavigate();
  const { provider } = useParams<{ provider: Lowercase<OAuthProvider> }>();
  const { setUser } = useUserStore();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      oauthLogin({ code, provider: provider!.toUpperCase() as OAuthProvider })
        .then((data) => {
          // TODO result 확정 이후 수정 필요
          console.log(data);
          // const { result } = data;
          const { result } = response;
          setUser({ ...result });
          navigate(!result.nickname ? "/profile" : "/", { replace: true });
        })
        .catch(console.error);
    }
  }, []);

  if (!code) {
    // code 없는경우 로그인페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  return null;
};
