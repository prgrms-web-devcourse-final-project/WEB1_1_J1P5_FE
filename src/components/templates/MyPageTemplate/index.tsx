import { TextButton } from "components/atoms";
import { Profile, MyPageMenu } from "components/organisms";
import { MyPageTemplateWrapper } from "./styled";

interface IMyPageTemplateProps {
  /** 프로필 이미지 URL */
  imgUrl: string;
  /** 닉네임 */
  nickname: string;
  /** 인증한 지역 */
  location: string;
  /** 프로필 수정 버튼 클릭 시 실행될 함수 */
  onProfileEditButtonClick: () => void;
  /** 메뉴 클릭 시 실행될 함수 */
  onMenuClick: (pathname: string) => void;
}

export const MyPageTemplate = ({
  imgUrl,
  nickname,
  location,
  onProfileEditButtonClick,
  onMenuClick
}: IMyPageTemplateProps) => {
  return (
    <MyPageTemplateWrapper>
      <Profile imgUrl={imgUrl} nickname={nickname} location={location} />
      <TextButton text="프로필 수정" onClick={onProfileEditButtonClick} />
      <MyPageMenu onMenuClick={onMenuClick} />
    </MyPageTemplateWrapper>
  );
};

