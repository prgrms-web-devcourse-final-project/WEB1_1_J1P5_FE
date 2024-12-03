import { TextButton } from "components/atoms";
import { Profile } from "../Profile";
import { BlockedUserItemWrapper } from "./styled";
import type { IProfile } from "types";

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
