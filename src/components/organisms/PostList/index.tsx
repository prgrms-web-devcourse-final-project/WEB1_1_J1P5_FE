import { PostListWrapper } from "./styled";
import { PostItem } from "../PostItem";
import { DownIcon } from "components/atoms/Icon";

export interface IPost {
  /** 게시글 ID */
  productId: number;
  /** 게시글 썸네일 이미지 */
  imgUrl: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 가격 */
  price: number;
  /** 게시글 등록된 주소 */
  address: string;
  /** 게시글 등록된 시간 */
  uploadTime: string;
  /** 게시글 아이템 클릭 이벤트 */
  onClick: () => void;
  /** 남은 시간 */
  expiredTime: string;
  /** 판매자 : 최고 입찰가, 구매자 : 나의 입찰가  */
  maxPrice: number;
  /** 판매중 : 끌어올리기, 완료 : 받은 후기 보기  */
  onTextButtonClick: () => void;
  /** 아이콘 버튼 클릭 이벤트 */
  onIconButtonClick: () => void;
}
export type PostItemType =
  | "completed"
  | "default"
  | "chat"
  | "selling"
  | "buying";
interface IPostListProps {
  posts: IPost[];
  type: PostItemType;
}

export const PostList = ({ posts, type }: IPostListProps) => {
  /**
   * default : 홈/글 목록
   */
  const DefaultState = ({
    productId,
    imgUrl,
    title,
    price,
    address,
    uploadTime,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <PostItem.Price price={price} />
          <PostItem.LocationAndTime address={address} uploadTime={uploadTime} />
        </PostItem.Container>
      </PostItem>
    );
  };
  const ChatState = ({
    productId,
    imgUrl,
    title,
    price,
    onClick,
    onTextButtonClick,
    onIconButtonClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"mini"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <PostItem.Price price={price} />
        </PostItem.Container>
        <PostItem.ButtonContainer
          buttonText={"거래 완료"}
          onTextButtonClick={onTextButtonClick}
          icon={DownIcon}
          onIconButtonClick={onIconButtonClick}
        />
      </PostItem>
    );
  };

  /**
   * completed : 마이페이지 구매/판매 내역 (거래 완료 상태)
   */
  const CompletedState = ({
    productId,
    imgUrl,
    title,
    price,
    address,
    uploadTime,
    maxPrice,
    onTextButtonClick,
    onIconButtonClick,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <PostItem.LocationAndTime address={address} uploadTime={uploadTime} />
          <PostItem.Price price={price} />

          <PostItem.Price title={"최고 입찰가"} price={maxPrice} />
        </PostItem.Container>
        <PostItem.ButtonContainer
          buttonText={"받은 후기 보기"}
          onTextButtonClick={onTextButtonClick}
          icon={DownIcon}
          onIconButtonClick={onIconButtonClick}
        />
      </PostItem>
    );
  };

  /**
   * Selling : 마이페이지 판매 내역 (판매 중 상태)
   */
  const SellingState = ({
    productId,
    imgUrl,
    title,
    price,
    address,
    uploadTime,
    expiredTime,
    maxPrice,
    onTextButtonClick,
    onIconButtonClick,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <PostItem.LocationAndTime address={address} uploadTime={uploadTime} />
          <PostItem.Price price={price} />
          <PostItem.RemainingTime expiredTime={expiredTime} />
          <PostItem.Price title={"최고 입찰가"} price={maxPrice} />
        </PostItem.Container>
        <PostItem.ButtonContainer
          buttonText={"끌어올리기"}
          onTextButtonClick={onTextButtonClick}
          icon={DownIcon}
          onIconButtonClick={onIconButtonClick}
        />
      </PostItem>
    );
  };

  /**
   * Buying : 마이페이지 구매 내역 (입찰 중 상태)
   */
  const BuyingState = ({
    productId,
    imgUrl,
    title,
    price,
    address,
    uploadTime,
    expiredTime,
    maxPrice,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <PostItem.LocationAndTime address={address} uploadTime={uploadTime} />
          <PostItem.Price price={price} />
          <PostItem.RemainingTime expiredTime={expiredTime} />
          <PostItem.Price title={"나의 입찰가"} price={maxPrice} />
        </PostItem.Container>
      </PostItem>
    );
  };

  const StateComponents = {
    completed: CompletedState,
    default: DefaultState,
    chat: ChatState,
    selling: SellingState,
    buying: BuyingState,
  };
  const SelectedStateComponent = StateComponents[type] || DefaultState;
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <SelectedStateComponent key={post.productId} {...post} />
      ))}
    </PostListWrapper>
  );
};
