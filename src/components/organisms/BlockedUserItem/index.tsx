import { TextButton } from "components/atoms";
import { Profile } from "../Profile";
import { BlockedUserItemWrapper } from "./styled";
import type { IBlockedUserItem } from "types";
import { LOGO_PATH } from "constants/imgPath"; 

interface IBlockedUserItemWrapperProps {
  /** 유저 프로필 */
  blockedUserItem: IBlockedUserItem;
  /** 차단하기 버튼 클릭시 동작 */
  onClick?: () => void;
}
export const BlockedUserItem = ({
  blockedUserItem,
  onClick
}: IBlockedUserItemWrapperProps) => {
  const btnText = blockedUserItem.isBlocked ? "차단해제" : "차단하기";
  return (
    <BlockedUserItemWrapper>
      <Profile
        imgUrl={blockedUserItem.imageUrl || LOGO_PATH}
        nickname={blockedUserItem.nickname}
        location={blockedUserItem.emdName}
      ></Profile>
      <TextButton text={btnText} onClick={onClick}></TextButton>
    </BlockedUserItemWrapper>
  );
};
