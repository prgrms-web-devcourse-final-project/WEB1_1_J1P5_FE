import { Image, Text } from "components/atoms";
import { LinkIcon } from "components/atoms/Icon";
import { IconWithText } from "components/molecules";
import {
  ProfileWrapper,
  ImageWrapper,
  TextWrapper,
  TextGuideColor
} from "./styled";

interface IProfileProps {
  /** 프로필 이미지 URL */
  imgUrl: string;
  /** 닉네임 */
  nickname: string;
  /** 인증한 지역 */
  location: string;
}

export const Profile = ({ imgUrl, nickname, location }: IProfileProps) => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image type="round" url={imgUrl} />
      </ImageWrapper>
      <TextWrapper>
        <IconWithText>
          <IconWithText.Content
            content={nickname}
            contentVariant="title_bold"
          />
          {/* TODO: 아이콘 굵기 얇게 수정 */}
          <IconWithText.Icon icon={LinkIcon} size="s" />
        </IconWithText>
        <TextGuideColor>
          <Text content={location} variant="explan_regular" />
        </TextGuideColor>
      </TextWrapper>
    </ProfileWrapper>
  );
};
