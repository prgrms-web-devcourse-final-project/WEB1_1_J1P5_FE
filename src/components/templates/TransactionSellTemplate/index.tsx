import { TransactionOverview } from "components/organisms";
import { TransactionSellTemplateWrapper } from "./styled";
import { IPost, PostItemType } from "components/organisms/PostList";
import { useState } from "react";
import { COMPLETED_TAB, SELLING_TAB } from "constants/transaction";

interface ITransactionSellTemplateProps {
  /** 탭 메뉴 클릭 이벤트 */
  onClick: (tab: string) => void;
  /** 현재 보여줄 post 리스트 */
  posts: IPost[];
}

export const TransactionSellTemplate = ({
  onClick,
  posts,
}: ITransactionSellTemplateProps) => {
  const [type, setType] = useState<PostItemType>("selling");

  const handleTabClick = (tab: string) => {
    onClick(tab);
    const newType = tab === SELLING_TAB ? "selling" : "completed";
    setType(newType); // 상태 업데이트
  };

  return (
    <TransactionSellTemplateWrapper>
      <TransactionOverview
        menus={[SELLING_TAB, COMPLETED_TAB]}
        onClick={handleTabClick}
        posts={posts}
        type={type}
      />
    </TransactionSellTemplateWrapper>
  );
};
