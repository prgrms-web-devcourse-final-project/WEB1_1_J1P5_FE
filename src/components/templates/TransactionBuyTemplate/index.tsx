import { TransactionOverview } from "components/organisms";
import { TransactionBuyTemplateWrapper } from "./styled";
import { IPost, PostItemType } from "components/organisms/PostList";
import { useState } from "react";
import { BUYING_TAB, COMPLETED_TAB } from "constants/transaction";

interface ITransactionBuyTemplateProps {
  /** 탭 메뉴 클릭 이벤트 */
  onClick: (tab: string) => void;
  /** 현재 보여줄 post 리스트 */
  posts: IPost[];
}

export const TransactionBuyTemplate = ({
  onClick,
  posts,
}: ITransactionBuyTemplateProps) => {
  const [type, setType] = useState<PostItemType>("buying");

  const handleTabClick = (tab: string) => {
    onClick(tab);
    const newType = tab === BUYING_TAB ? "buying" : "completed";
    setType(newType); // 상태 업데이트
  };

  return (
    <TransactionBuyTemplateWrapper>
      <TransactionOverview
        menus={[BUYING_TAB, COMPLETED_TAB]}
        onClick={handleTabClick}
        posts={posts}
        type={type}
      ></TransactionOverview>
    </TransactionBuyTemplateWrapper>
  );
};
