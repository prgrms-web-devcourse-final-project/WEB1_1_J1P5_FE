import { TextButton } from "components/atoms";
import { Profile } from "../Profile";
import { BlockedUserItemWrapper } from "./styled";
import type { IBlockedUserItem } from "types";

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
  const btnText = blockedUserItem.isBlocked ? "차단하기" : "차단해제";
  return (
    <BlockedUserItemWrapper>
      <Profile
        imgUrl={blockedUserItem.imgUrl}
        nickname={blockedUserItem.nickname}
        location={blockedUserItem.address}
      ></Profile>
      <TextButton text={btnText} onClick={onClick}></TextButton>
    </BlockedUserItemWrapper>
  );
};
