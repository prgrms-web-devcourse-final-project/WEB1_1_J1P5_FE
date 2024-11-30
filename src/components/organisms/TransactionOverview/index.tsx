import { TabMenu } from "components/molecules";
import { TransactionOverviewWrapper } from "./styled";
import { IPost, PostItemType, PostList } from "../PostList";

interface ITransactionOverviewProps {
  /** 탭 메뉴 title 리스트 */
  menus: string[];
  /** 탭 메뉴 클릭 이벤트 */
  onClick: (tab: string) => void;
  /** 현재 보여줄 post 리스트 */
  posts: IPost[];
  /** post 리스트의 type (PostList의 성격) */
  type: PostItemType;
}

export const TransactionOverview = ({
  menus,
  onClick,
  posts,
  type,
}: ITransactionOverviewProps) => {
  return (
    <TransactionOverviewWrapper>
      <TabMenu menus={menus} onClick={onClick}></TabMenu>
      <PostList posts={posts} type={type}></PostList>
    </TransactionOverviewWrapper>
  );
};
