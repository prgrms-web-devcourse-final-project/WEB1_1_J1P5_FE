import { useQuery } from "@tanstack/react-query";
import { IPost } from "components/organisms/PostList";
import {
  TransactionBuyTemplate,
  TransactionSellTemplate,
} from "components/templates";
import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { BUYING_TAB, COMPLETED_TAB, SELLING_TAB } from "constants/transaction";
import { useModalForm } from "hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "services/api";
import { useTopBarStore } from "stores";
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
  const { clear, setTitle } = useTopBarStore();
  const { todo } = useModalForm();
  const navigate = useNavigate();

  /** TODO: 백엔드 API에 따라 변경 필요 */
  const TRANSACTION_API_URL = `/transaction/${type}`;
  const TRANSACTION_NAVIGATE_URL = "/product";

  const tempPosts: IPost[] = Array.from({ length: 10 }, (_, index) => ({
    productId: index + 1,
    imgUrl: DEFAULT_IMG_PATH,
    title: `물품 ${index + 1}`,
    price: 3500 + index * 1000,
    address: "신림동",
    uploadTime: `2024-11-28 ${11 + index}:00:00`,
    onClick: () => {
      todo();
    },
    expiredTime: `2024-12-29 ${11 + index}:00:00`,
    maxPrice: 30000,
    onTextButtonClick: () => {
      todo();
    },
    onIconButtonClick: () => {
      console.log("Icon Button 클릭");
    },
  }));

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
    const response = await http.get<ITransactionPageResponse>(
      TRANSACTION_API_URL
    );
    if (response.success && response.code === "COMMON200") {
      // 백엔드 타입 프론트엔드 타입으로 변환
      return response.result.content.map(createTransactionPostItem);
    }
    throw new Error("Failed to fetch data");
  };

  const { data, refetch } = useQuery({
    queryKey: ["transactionPosts", type],
    queryFn: fetchPosts,
    initialData: tempPosts, // 에러 시 대체 데이터로 사용
    retry: 2, // 최대 2번만 재시도
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000), // 재시도 간격 (옵션)
  });

  /** TODO : 탭 바뀔때마다 fecth 하도록 변경 필요 */
  const onHandleTab = async (tab: string) => {
    try {
      if (type === "sell") {
        if (tab === SELLING_TAB) {
          await refetch();
        } else if (tab === COMPLETED_TAB) {
          await refetch();
        }
      } else if (type === "buy") {
        if (tab === BUYING_TAB) {
          await refetch();
        } else if (tab === COMPLETED_TAB) {
          await refetch();
        }
      }
    } catch (error) {
      console.error("Failed to refetch data:", error);
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
    <>
      {type === "buy" && (
        <TransactionBuyTemplate onClick={onHandleTab} posts={data} />
      )}
      {type === "sell" && (
        <TransactionSellTemplate onClick={onHandleTab} posts={data} />
      )}
    </>
  );
};
