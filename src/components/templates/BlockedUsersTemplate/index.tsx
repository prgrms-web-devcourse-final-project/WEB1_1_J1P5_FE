import { BlockedUsersList } from "components/organisms";
import { BlockedUsersTemplateWrapper } from "./styled";
import type { IBlockedUserItem } from "types";

interface IBlockedUsersTemplateProps {
  /** 유저 프로필 */
  blockedUserItems: IBlockedUserItem[];
  /** 차단하기 버튼 클릭시 동작 */
  onClick: (index: number) => void;
  children?: React.ReactNode;
}

export const BlockedUsersTemplate = ({
  blockedUserItems,
  onClick,
  children
}: IBlockedUsersTemplateProps) => {
  return (
    <BlockedUsersTemplateWrapper>
      <BlockedUsersList blockedUserItems={blockedUserItems} onClick={onClick} />
      {children}
    </BlockedUsersTemplateWrapper>
  );
};
