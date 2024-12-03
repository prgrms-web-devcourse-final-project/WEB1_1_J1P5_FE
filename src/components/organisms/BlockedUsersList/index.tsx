import { BlockedUserItem } from "../BlockedUserItem";
import { BlockedUsersListWrapper } from "./styled";
import type { IBlockedUserItem } from "types";

interface IBlockedUsersListProps {
  /** BlockedUserItem 리스트 */
  blockedUserItems: IBlockedUserItem[];
}

export const BlockedUsersList = ({
  blockedUserItems,
}: IBlockedUsersListProps) => {
  return (
    <BlockedUsersListWrapper>
      {blockedUserItems.map((blockedUserItem, idx) => {
        return (
          <BlockedUserItem
            key={idx}
            profile={blockedUserItem.profile}
            onClick={() => blockedUserItem.onClick(idx)}
          ></BlockedUserItem>
        );
      })}
    </BlockedUsersListWrapper>
  );
};
