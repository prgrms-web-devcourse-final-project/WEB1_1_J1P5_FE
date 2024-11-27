import { IProfile, BlockedUserItem } from "../BlockedUserItem";
import { BlockedUsersListWrapper } from "./styled";

interface IBlockedUsersListProps {
  /** BlockedUserItem 리스트 */
  blockedUserItems: IBlockedUserItem[];
}

export interface IBlockedUserItem {
  profile: IProfile;
  onClick: () => void;
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
            onClick={blockedUserItem.onClick}
          ></BlockedUserItem>
        );
      })}
    </BlockedUsersListWrapper>
  );
};
