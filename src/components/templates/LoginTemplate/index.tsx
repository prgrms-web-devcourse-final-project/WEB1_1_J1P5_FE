import { LoginButton, Logo, Text } from "components/atoms";
import { LoginButtonWrapper, LoginTemplateWrapper } from "./styled";

interface IComponentProps {
  /** 네이버 로그인 버튼 클릭 */
  onNaverLoginClick: () => void;
  /** 카카오 로그인 버튼 클릭 */
  onKakaoLoginClick: () => void;
}

export const LoginTemplate = ({
  onNaverLoginClick,
  onKakaoLoginClick,
}: IComponentProps) => {
  return (
    <LoginTemplateWrapper>
      <Text
        variant="h5"
        content={"사는 재미와 파는 재미,\n미어켓과 중고 거래를 시작해보세요!"}
      />
      <Logo />
      <LoginButtonWrapper>
        <LoginButton type="naver" onClick={onNaverLoginClick} />
        <LoginButton type="kakao" onClick={onKakaoLoginClick} />
      </LoginButtonWrapper>
    </LoginTemplateWrapper>
  );
};
