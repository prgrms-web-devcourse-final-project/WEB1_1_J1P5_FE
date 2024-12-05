import { IPost } from "components/organisms/PostList";
import {
  TransactionBuyTemplate,
  TransactionSellTemplate,
} from "components/templates";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { BUYING_TAB, COMPLETED_TAB, SELLING_TAB } from "constants/transaction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "services/api";
import { IResponse } from "types";

interface TransactionPageProps {
  /** 판매내역 구매내역 */
  type: "buy" | "sell";
}
interface ITransactionPost {
  /** product ID */
  productId: number;
  /** 물품 이미지 경로 */
  imageUrl: string;
  /** 물품 이름 */
  title: string;
  /** 물품 등록된 주소 */
  productAddress: string;
  /** 물품 등록 시간 */
  createdAt: string;
  /** 물품 최소 입찰가 */
  price: number;
  /** 물품 낙찰까지 남은 시간 */
  expiredTime?: string;
  /** 판매중 기준 최고 입찰가 */
  maxPrice?: number;
  /** 구매자 기준 나의 입찰가 */
  buyPrice?: number;
}

interface ITransactionPageResponse extends IResponse {
  result: {
    content: ITransactionPost[];
  };
}

export const TransactionPage = ({ type }: TransactionPageProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  /** TODO: 백엔드 API에 따라 변경 필요 */
  const TRANSACTION_API_URL = `/transaction/${type}`;
  const TRANSACTION_NAVIGATE_URL = "/product";
  const navigate = useNavigate();

  /** 백엔드 IHomePost 타입을 프론트 IPost 으로 변환 함수
   * @param homePost : ITransactionPost
   * @returns IPost
   */
  const createTransactionPostItem = (
    transactionPost: ITransactionPost
  ): IPost => ({
    /** 게시글 ID */
    productId: transactionPost.productId,
    /** 게시글 썸네일 이미지 */
    imgUrl: transactionPost.imageUrl,
    /** 게시글 제목 */
    title: transactionPost.title,
    /** 게시글 가격 */
    price: transactionPost.price,
    /** 게시글 등록된 주소 */
    address: transactionPost.productAddress,
    /** 게시글 등록된 시간 */
    uploadTime: transactionPost.createdAt,
    /** 남은 시간 */
    expiredTime: transactionPost.expiredTime || "",
    /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
    maxPrice: transactionPost.maxPrice
      ? transactionPost.maxPrice
      : transactionPost.buyPrice
      ? transactionPost.buyPrice
      : -1,
    /** 게시글 아이템 클릭 이벤트
     * 해당 페이지로 이동하게 로직 변경
     */
    onClick: () => {
      /** 상세 페이지로 이동 */
      navigate(TRANSACTION_NAVIGATE_URL + `/${transactionPost.productId}`);
    },
    /** 판매중 : 끌어올리기, 완료 : 받은 후기 보기
     * 홈 화면에는 필요없는 함수
     */
    onTextButtonClick: () => {},
    /** 아이콘 버튼 클릭 이벤트
     * 홈 화면에는 필요 없는 함수
     */
    onIconButtonClick: () => {},
  });

  /** userId 를 기반으로 해당 유저가 볼 수 있는 post 목록을 가져오는 함수
   * @returns void
   */
  const fetchPosts = async () => {
    try {
      const response = await http.get<ITransactionPageResponse>(
        TRANSACTION_API_URL
      );
      if (response.success && response.code === "COMMON200") {
        // 백엔드 타입 프론트엔드 타입으로 변환
        const posts = response.result.content.map(createTransactionPostItem);
        setPosts(posts);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  /** 최초 접속시 post리스트 fetch 해오는 함수
   * @returns void
   */
  useEffect(() => {
    const fetchTransactionPosts = async () => {
      await fetchPosts();
    };
    fetchTransactionPosts().catch((error) => {
      console.error("Error fetchting Home Post:", error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tempPosts: IPost[] = Array.from({ length: 5 }, (_, index) => ({
    productId: index + 1,
    imgUrl: DEFAULT_IMG_PATH,
    title: `물품 ${index + 1}`,
    price: 3500 + index * 1000,
    address: "신림동",
    uploadTime: `2024-11-28 ${11 + index}:00:00`,
    onClick: () => {
      console.log(`클릭 ${index + 1}`);
    },
    expiredTime: `2024-12-29 ${11 + index}:00:00`,
    maxPrice: 30000,
    onTextButtonClick: () => {
      console.log("Text Button 클릭");
    },
    onIconButtonClick: () => {
      console.log("Icon Button 클릭");
    },
  }));

  /** TODO : 탭 바뀔때마다 fecth 하도록 변경 필요 */
  const onHandleTab = (tab: string) => {
    if (type === "sell") {
      if (tab === SELLING_TAB) {
        setPosts(tempPosts);
      } else if (tab === COMPLETED_TAB) {
        setPosts([]);
      }
    } else if (type === "buy") {
      if (tab === BUYING_TAB) {
        setPosts(tempPosts);
      } else if (tab === COMPLETED_TAB) {
        setPosts([]);
      }
    }
  };

  return (
    <>
      {type === "buy" && (
        <TransactionBuyTemplate onClick={onHandleTab} posts={posts} />
      )}
      {type === "sell" && (
        <TransactionSellTemplate onClick={onHandleTab} posts={posts} />
      )}
    </>
  );
};
