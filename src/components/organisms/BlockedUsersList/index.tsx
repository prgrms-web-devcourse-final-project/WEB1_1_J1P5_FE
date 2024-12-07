import { BlockedUserItem } from "../BlockedUserItem";
import { BlockedUsersListWrapper } from "./styled";
import type { IBlockedUserItem } from "types";

interface IBlockedUsersListProps {
  /** 유저 프로필 */
  blockedUserItems: IBlockedUserItem[];
  /** 차단하기 버튼 클릭시 동작 */
  onClick: (index: number) => void;
}

export const BlockedUsersList = ({
  blockedUserItems,
  onClick
}: IBlockedUsersListProps) => {
  return (
    <BlockedUsersListWrapper>
      {blockedUserItems.map((blockedUserItem, idx) => {
        return (
          <BlockedUserItem
            key={idx}
            blockedUserItem={blockedUserItem}
            onClick={() => onClick(idx)}
          ></BlockedUserItem>
        );
      })}
    </BlockedUsersListWrapper>
  );
};
