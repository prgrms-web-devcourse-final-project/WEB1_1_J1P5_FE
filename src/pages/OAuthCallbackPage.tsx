import {
  Navigate,
  // useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import type { OAuthProvider } from "types";
// import { oauthLogin } from "services/apis";

export const OAuthCallbackPage = () => {
  // TODO 직접 접근 막기
  // const navigate = useNavigate();
  const { provider } = useParams<{ provider: OAuthProvider }>();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  if (!code) {
    // code 없는경우 로그인페이지로 리다이렉트
    return <Navigate to="/login" replace />;
  }

  console.log(provider, code);

  // TODO 처리
  // oauthLogin({ code, provider: provider! })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(console.error);

  return <>{provider}</>;
};
