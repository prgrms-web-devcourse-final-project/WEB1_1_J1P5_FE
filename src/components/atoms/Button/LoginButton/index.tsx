import { KakaoButtonWrapper, NaverButtonWrapper } from "./styled";
import KakaoLogo from "assets/LoginButton/kakao.svg";
import NaverLogo from "assets/LoginButton/naver.svg";

interface ILoginButtonProps {
  /** 로그인 버튼의 타입 */
  type: "naver" | "kakao";
  /** 로그인 버튼 클릭 시 이벤트 */
  onClick?: () => void;
}

const KakaoLoginButton = ({ onClick }: Omit<ILoginButtonProps, "type">) => {
  return (
    <KakaoButtonWrapper onClick={onClick}>
      <img src={KakaoLogo} alt="카카오 로그인 아이콘" />
      <span>카카오 로그인</span>
    </KakaoButtonWrapper>
  );
};

const NaverLoginButton = ({ onClick }: Omit<ILoginButtonProps, "type">) => {
  return (
    <NaverButtonWrapper onClick={onClick}>
      <img src={NaverLogo} alt="네이버 로그인 아이콘" />
      <span>네이버 로그인</span>
    </NaverButtonWrapper>
  );
};

/**
 * 소셜 로그인 버튼
 */
export const LoginButton = ({
  type,
  onClick = () => {},
}: ILoginButtonProps) => {
  const Component = type === "kakao" ? KakaoLoginButton : NaverLoginButton;
  return <Component onClick={onClick} />;
};
