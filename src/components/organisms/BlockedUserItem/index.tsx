import { TextButton } from "components/atoms";
import { Profile } from "../Profile";
import { BlockedUserItemWrapper } from "./styled";

export interface IProfile {
  /** 프로필 이미지 URL */
  imgUrl: string;
  /** 닉네임 */
  nickname: string;
  /** 인증한 지역 */
  location: string;
  /** 차단 여부 */
  isBlocked: boolean;
}
interface IBlockedUserItemWrapperProps {
  /** 유저 프로필 */
  profile: IProfile;
  /** 차단하기 버튼 클릭시 동작 */
  onClick?: () => void;
}
export const BlockedUserItem = ({
  profile,
  onClick,
}: IBlockedUserItemWrapperProps) => {
  const btnText = profile.isBlocked ? "차단하기" : "차단해제";
  return (
    <BlockedUserItemWrapper>
      <Profile
        imgUrl={profile.imgUrl}
        nickname={profile.nickname}
        location={profile.location}
      ></Profile>
      <TextButton text={btnText} onClick={onClick}></TextButton>
    </BlockedUserItemWrapper>
  );
};
