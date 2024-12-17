import { IPost } from "components/organisms/PostList";
import {
  TransactionBuyTemplate,
  TransactionSellTemplate,
} from "components/templates";
import { BUYING_TAB, COMPLETED_TAB, SELLING_TAB } from "constants/transaction";
import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTopBarStore } from "stores";
import { type TransactionTab, useFetchTransactions } from "hooks";
import { Loading } from "components/molecules/Loading";
import type { IAuction, ITransactionProduct } from "types";

interface TransactionPageProps {
  /** 판매내역 구매내역 */
  type: "buy" | "sell";
}

export const TransactionPage = ({ type }: TransactionPageProps) => {
  const navigate = useNavigate();
  const TransactionTemplate =
    // 현재 페이지 타입에 따라 Template 설정
    type === "buy" ? TransactionBuyTemplate : TransactionSellTemplate;
  const [tab, setTab] = useState<TransactionTab>("in_progress");
  const { clear, setTitle } = useTopBarStore();
  const { products } = useFetchTransactions(type, tab);

  /**
   * 백엔드 ResponseData를 IPost Item에 들어갈 형식으로 변환하는 함수
   * @param post ResponseData로 넘어온 post
   * @param index
   * @returns IPost
   */
  const createTransactionPostItem = (
    post: IAuction | ITransactionProduct,
    index: number,
  ): IPost => {
    const product: Omit<
      IPost,
      "onClick" | "onTextButtonClick" | "onIconButtonClick"
    > = {
      /** 게시글 ID */
      productId: ("productId" in post && post.productId) || index,
      /** 게시글 썸네일 이미지 */
      imgUrl:
        ("imageUrl" in post && post.imageUrl) ||
        ("productImage" in post && post.productImage) ||
        "",
      /** 게시글 제목 */
      title:
        ("title" in post && post.title) ||
        ("productTitle" in post && post.productTitle) ||
        "",
      /** 게시글 가격 */
      price:
        ("price" in post && post.price) ||
        ("minPrice" in post && post.minPrice) ||
        -1,
      /** 게시글 등록된 주소 */
      address:
        ("productAddress" in post && post.productAddress) ||
        ("sellerAddress" in post && post.sellerAddress) ||
        "",
      /** 게시글 등록된 시간 */
      uploadTime:
        ("createdAt" in post && post.createdAt) ||
        ("productCreatedAt" in post && post.productCreatedAt) ||
        "",
      /** 남은 시간 */
      expiredTime:
        ("expiredTime" in post && post.expiredTime) ||
        ("expireTime" in post && post.expireTime) ||
        "",
      /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
      maxPrice:
        ("winningPrice" in post && post.winningPrice) ||
        ("bidPrice" in post && post.bidPrice) ||
        -1,
    };
    return {
      ...product,
      /** 게시글 아이템 클릭 이벤트
       * 해당 페이지로 이동하게 로직 변경
       */
      onClick: () => {
        /** 상세 페이지로 이동 */
        navigate(`/product/${product.productId}`);
      },
      /** 판매중 : 끌어올리기, 완료 : 받은 후기 보기
       * 홈 화면에는 필요없는 함수
       */
      onTextButtonClick: () => {},
      /** 아이콘 버튼 클릭 이벤트
       * 홈 화면에는 필요 없는 함수
       */
      onIconButtonClick: () => {},
    };
  };

  /**
   * Tab 클릭 시 실행할 함수
   * @param tab
   */
  const onHandleTab = (tab: string) => {
    if (type === "sell") {
      if (tab === SELLING_TAB) {
        setTab("in_progress");
      } else if (tab === COMPLETED_TAB) {
        setTab("completed");
      }
    } else if (type === "buy") {
      if (tab === BUYING_TAB) {
        setTab("in_progress");
      } else if (tab === COMPLETED_TAB) {
        setTab("completed");
      }
    }
  };

  /** 최초 접속시 헤더 변경
   * @returns void
   */
  useEffect(() => {
    clear();
    setTitle(type === "sell" ? "판매 내역" : "입찰 내역");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <TransactionTemplate
        onClick={onHandleTab}
        posts={
          products?.map((product, idx) =>
            createTransactionPostItem(product, idx),
          ) || []
        }
      />
    </Suspense>
  );
};
