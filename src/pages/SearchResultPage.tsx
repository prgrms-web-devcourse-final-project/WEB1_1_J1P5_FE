import { useEffect, useState } from "react";
import { useSearchTopBar } from "hooks";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory, IResponse } from "types";
import { http } from "services/api";
import { IPost } from "components/organisms/PostList";
import { SearchResultsTemplate } from "components/templates";
import { CATEGORIES } from "constants/categories";

interface ISearchPost {
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

interface ISearchPostResponse extends IResponse {
  result: {
    content: ISearchPost[];
  };
}
export const SearchResultPage = () => {
  /** 2. 키워드 검색결과 관련 변수 및 함수   */
  const SEARCH_KEYWORD_API_URL = `/products/keywords`;
  const SEARCH_CATEGORY_API_URL = `/products/categories`;
  const SEARCH_NAVIGATE_URL = "/product";
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);
  /** 백엔드 IHomePost 타입을 프론트 IPost 으로 변환 함수
   * @param searchPost : ISearchPost
   * @returns IPost
   */
  const createSearchPostItem = (searchPost: ISearchPost): IPost => ({
    /** 게시글 ID */
    productId: searchPost.productId,
    /** 게시글 썸네일 이미지 */
    imgUrl: searchPost.image,
    /** 게시글 제목 */
    title: searchPost.title,
    /** 게시글 가격 */
    price: searchPost.price,
    /** 게시글 등록된 주소 */
    address: searchPost.address,
    /** 게시글 등록된 시간 */
    uploadTime: searchPost.uploadTime,
    /** 남은 시간 */
    expiredTime: searchPost.expiredTime,
    /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
    maxPrice: -1,
    /** 게시글 아이템 클릭 이벤트
     * 해당 페이지로 이동하게 로직 변경
     */
    onClick: () => {
      /** 상세 페이지로 이동 */
      navigate(SEARCH_NAVIGATE_URL + `/${searchPost.productId}`);
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
  const fetchPosts = async (url: string) => {
    console.log(url);
    try {
      const response = await http.get<ISearchPostResponse>(url);
      if (response.success && response.code === "COMMON200") {
        // 백엔드 타입 프론트엔드 타입으로 변환
        const posts = response.result.content.map(createSearchPostItem);
        setPosts(posts);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  /** 1. 초기 카테고리, 검색 키워드 세팅  */
  const { category, keyword } = useParams<{
    category?: string;
    keyword?: string;
  }>();
  const { setSearchTerm } = useSearchTopBar();
  useEffect(() => {
    let categoryText: ICategory = { code: "", name: "" };
    if (category) {
      categoryText = CATEGORIES.find((item) => item.code === category) || {
        code: "",
        name: "",
      };
    }
    const searchValue = keyword || categoryText.name;

    setSearchTerm(searchValue);

    const fetchSearchPosts = async () => {
      // URL 결정
      const url = category
        ? SEARCH_CATEGORY_API_URL + `?category=${category}`
        : SEARCH_KEYWORD_API_URL + `?keyword=${keyword}`;
      await fetchPosts(url);
    };
    fetchSearchPosts().catch((error) => {
      console.error("Error fetchting Home Post:", error);
    });
  }, [category, keyword]);

  return <SearchResultsTemplate posts={posts}></SearchResultsTemplate>;
};
