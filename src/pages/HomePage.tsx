import { useQuery } from "@tanstack/react-query";
import { Loading } from "components/molecules/Loading";
import { IPost } from "components/organisms/PostList";
import { HomeTemplate } from "components/templates";
import {
  HOME_API_URL,
  HOME_LOADING_MESSAGE,
  HOME_NAVIGATE_URL,
} from "constants/HomePageConstants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "services/api";
import { useHeaderStore, useUserStore, useFormDataStore } from "stores";
import { IResponse } from "types";
interface IHomePost {
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

interface IHomePostResponse extends IResponse {
  result: {
    content: IHomePost[];
  };
}
export const HomePage = () => {
  const { user } = useUserStore();
  const { setTitle } = useHeaderStore();
  const navigate = useNavigate();
  const { clear } = useFormDataStore();

  /** 백엔드 IHomePost 타입을 프론트 IPost 으로 변환 함수
   * @param homePost : IHomePost
   * @returns IPost
   */
  const createHomePostItem = (homePost: IHomePost): IPost => ({
    /** 게시글 ID */
    productId: homePost.productId,
    /** 게시글 썸네일 이미지 */
    imgUrl: homePost.image,
    /** 게시글 제목 */
    title: homePost.title,
    /** 게시글 가격 */
    price: homePost.price,
    /** 게시글 등록된 주소 */
    address: homePost.address,
    /** 게시글 등록된 시간 */
    uploadTime: homePost.uploadTime,
    /** 남은 시간 */
    expiredTime: homePost.expiredTime,
    /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
    maxPrice: -1,
    /** 게시글 아이템 클릭 이벤트
     * 해당 페이지로 이동하게 로직 변경
     */
    onClick: () => {
      /** 상세 페이지로 이동 */
      navigate(HOME_NAVIGATE_URL + `/${homePost.productId}`);
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
    const response = await http.get<IHomePostResponse, { size: number }>(
      HOME_API_URL,
      { size: 100 }
    );
    if (response.success && response.code === "COMMON200") {
      return response.result.content.map(createHomePostItem);
    }
    throw new Error("Failed to fetch home posts");
  };

  /** React Query로 데이터 패칭 */
  const { data, isLoading } = useQuery({
    queryKey: ["homePosts", HOME_API_URL],
    queryFn: fetchPosts,
    staleTime: 0,
    refetchOnWindowFocus: false, // 화면 포커스 시 리페치 비활성화
    retry: 3, // 실패 시 최대 3회 재시도
  });

  /** 헤더에 동네 이름 받아서 출력
   * @returns void
   */
  useEffect(() => {
    setTitle(user?.emdName || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** 내 물건 판매하기 버튼 클릭 이벤트(물품 등록 페이지로 이동)
   * @returns void
   */
  const onHandleRegisterButton = () => {
    clear();
    navigate(HOME_NAVIGATE_URL);
  };

  if (isLoading) {
    return <Loading message={HOME_LOADING_MESSAGE} />;
  }
  return (
    <HomeTemplate
      posts={data || []}
      onClick={onHandleRegisterButton}
    ></HomeTemplate>
  );
};
