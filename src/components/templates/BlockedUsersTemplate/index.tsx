import {} from "components/atoms";
import {} from "components/molecules";
import { BlockedUsersList } from "components/organisms";
import { BlockedUsersTemplateWrapper } from "./styled";
import type { IBlockedUserItem } from "types";

interface IBlockedUsersTemplateProps {
  /** BlockedUserItem 리스트 */
  blockedUserItems: IBlockedUserItem[];
}

export const BlockedUsersTemplate = ({
  blockedUserItems
}: IBlockedUsersTemplateProps) => {
  return (
    <BlockedUsersTemplateWrapper>
      <BlockedUsersList blockedUserItems={blockedUserItems} />
    </BlockedUsersTemplateWrapper>
  );
};
