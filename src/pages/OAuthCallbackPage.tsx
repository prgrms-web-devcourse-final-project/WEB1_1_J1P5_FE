import { useEffect } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";
import { oauthLogin } from "services/apis";
import { useUserStore } from "stores";
import type { OAuthProvider } from "types";

export const OAuthCallbackPage = () => {
  // TODO 직접 접근 막기
  const navigate = useNavigate();
  const { provider } = useParams<{ provider: Lowercase<OAuthProvider> }>();
  const { setUser } = useUserStore();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  // const { setActivityArea } = useActivityAreaStore(state => state.actions);

  useEffect(() => {
    if (code) {
      oauthLogin({ code, provider: provider!.toUpperCase() as OAuthProvider })
        .then((data) => {
          const { result } = data;

          /**
           * TODO: 지금 따로 스토어를 만들었는데, user랑 합칠 지 논의 필요
           * 임시로 필요한 로직을 추가
           */
          // setActivityArea(result.activityAreaId, result.activityArea);

          setUser({
            profile: result.profileUrl || undefined,
            nickname: result.nickname || undefined,
            emdName: result.emdName || undefined,
            emdId: result.emdId || undefined
          });

          navigate("/", { replace: true });
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
