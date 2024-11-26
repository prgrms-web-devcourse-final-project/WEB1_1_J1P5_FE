import { Image, Text } from "components/atoms";
import { ProfileWrapper, ImageWrapper, TextWrapper } from "./styled";

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
        <Text content={nickname} variant="h5" />
        <Text content={location} variant="body1" />
      </TextWrapper>
    </ProfileWrapper>
  );
};

