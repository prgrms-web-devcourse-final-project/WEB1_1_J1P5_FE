import { TransactionOverview } from "components/organisms";
import { TransactionSellTemplateWrapper } from "./styled";
import { IPost, PostItemType } from "components/organisms/PostList";
import { useState } from "react";

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
  const sellingTab = "판매중";
  const completedTab = "거래완료";
  const [type, setType] = useState<PostItemType>("selling");

  const handleTabClick = (tab: string) => {
    onClick(tab);
    const newType = tab === sellingTab ? "selling" : "completed";
    setType(newType); // 상태 업데이트
    console.log(`탭 클릭: ${tab}, type: ${newType}`);
  };

  return (
    <TransactionSellTemplateWrapper>
      <TransactionOverview
        menus={[sellingTab, completedTab]}
        onClick={handleTabClick}
        posts={posts}
        type={type}
      ></TransactionOverview>
    </TransactionSellTemplateWrapper>
  );
};
