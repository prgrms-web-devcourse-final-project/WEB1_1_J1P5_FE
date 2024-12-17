import { useQuery } from "@tanstack/react-query";
import { Loading } from "components/molecules/Loading";
import { IPost } from "components/organisms/PostList";
import { MarketPriceTemplate } from "components/templates";
import {
  MARKET_PRICE_API_URL,
  MARKET_PRICE_LOADING_MESSAGE,
  MARKET_PRICE_NAVIGATE_URL,
} from "constants/MarketPricePageConstants";
import { useNavigate } from "react-router-dom";
import { http } from "services/api";
import { IResponse } from "types";

interface IMarketPricePost {
  myLocation: string;
  productId: number;
  memberId: number;
  title: string;
  price: number;
  address: string;
  uploadTime: string;
  expiredTime: string;
  isEarly: boolean;
  image: string;
}
interface IMarketPricePostResponse extends IResponse {
  result: {
    content: IMarketPricePost[];
  };
}

export const MarketPricePage = () => {
  const navigate = useNavigate();

  /** 백엔드 IMarketPricePost 타입을 프론트 IPost 으로 변환 함수
   * @param marketPricePost : IMarketPricePost
   * @returns IPost
   */
  /** 백엔드 IHomePost 타입을 프론트 IPost 으로 변환 함수
   * @param homePost : IHomePost
   * @returns IPost
   */
  const createMarketPricePostItem = (
    marketPricePost: IMarketPricePost
  ): IPost => ({
    /** 게시글 ID */
    productId: marketPricePost.productId,
    /** 게시글 썸네일 이미지 */
    imgUrl: marketPricePost.image,
    /** 게시글 제목 */
    title: marketPricePost.title,
    /** 게시글 가격 */
    price: marketPricePost.price,
    /** 게시글 등록된 주소 */
    address: marketPricePost.address,
    /** 게시글 등록된 시간 */
    uploadTime: marketPricePost.uploadTime,
    /** 남은 시간 */
    expiredTime: marketPricePost.expiredTime,
    /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
    maxPrice: -1,
    /** 게시글 아이템 클릭 이벤트
     * 해당 페이지로 이동하게 로직 변경
     */
    onClick: () => {
      /** 상세 페이지로 이동 */
      navigate(MARKET_PRICE_NAVIGATE_URL + `/${marketPricePost.productId}`);
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
    const response = await http.get<IMarketPricePostResponse, { size: number }>(
      MARKET_PRICE_API_URL,
      { size: 100 }
    );
    if (response.success && response.code === "COMMON200") {
      return response.result.content.map(createMarketPricePostItem);
    }
    throw new Error("Failed to fetch market price posts");
  };

  /** React Query로 데이터 패칭 */
  const { data, isLoading } = useQuery({
    queryKey: ["marketPricePosts", MARKET_PRICE_API_URL],
    queryFn: fetchPosts,
    staleTime: 0,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  if (isLoading) {
    return <Loading message={MARKET_PRICE_LOADING_MESSAGE} />;
  }
  return <MarketPriceTemplate posts={data || []}></MarketPriceTemplate>;
};
