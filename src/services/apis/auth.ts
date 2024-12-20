import { http } from "services/api";
import type { IAuthData, IAuthResponse, OAuthProvider } from "types";

const redirectUrl: string = `${import.meta.env.VITE_CLIENT_URL}/login/callback`;
const authorizeUrl: Record<OAuthProvider, string> = {
  KAKAO: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_OAUTH_KAKAO_KEY
  }&redirect_uri=${redirectUrl}/kakao`,
  NAVER: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_OAUTH_NAVER_KEY
  }&redirect_uri=${redirectUrl}/naver`,
};

/**
 * provider의 authorize 페이지로 이동하는 함수
 * @param provider
 */
export const requestOAuthLogin = (provider: OAuthProvider) => {
  //location.href = authorizeUrl[provider];
  window.open(authorizeUrl[provider], "_blank");
};

/**
 * oauth 로그인
 * @param code
 * @param provider
 */
export const oauthLogin = async ({ code, provider }: IAuthData) => {
  return http.post<IAuthResponse, IAuthData>("/oauth", { code, provider });
};

/**
 * 로그아웃
 */
export const oauthLogout = async () => {
  return http.post("/oauth/logout");
};
