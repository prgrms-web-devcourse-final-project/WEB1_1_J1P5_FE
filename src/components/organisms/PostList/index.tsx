import { PostListWrapper } from "./styled";
import { PostItem } from "../PostItem";
import { DownIcon } from "components/atoms/Icon";
import { Text } from "components/atoms";

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
  /** 판매자 여부 */
  isSeller?: boolean;
  /** 게시글 상태 */
  status?: "BIDDING" | "IN_PROGRESS" | "COMPLETED";
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
  /** 거래 완료 여부 */
  isCompleted?: boolean;
}

export const PostList = ({ posts, type, isCompleted }: IPostListProps) => {
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
    isSeller,
    address,
    uploadTime,
  }: IPost) => {
    console.log("postList isCompleted", isCompleted);
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <PostItem.Price price={price} />
          <div className="location-con">
            <PostItem.LocationAndTime
              type="2"
              address={address}
              uploadTime={uploadTime}
            />
          </div>
        </PostItem.Container>
        {isSeller && (
          <PostItem.ButtonContainer
            buttonText={isCompleted ? "거래가 완료되었어요!" : "거래 완료"}
            onTextButtonClick={onTextButtonClick}
            icon={DownIcon}
            onIconButtonClick={onIconButtonClick}
            disabled={isCompleted}
          />
        )}
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
    // onTextButtonClick,
    // onIconButtonClick,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          <div className="location-con">
            <PostItem.LocationAndTime
              address={address}
              uploadTime={uploadTime}
            />
          </div>
          <div className="price-con">
            <PostItem.Price
              title={"최소 입찰가 ·"}
              price={price}
              variant="tag_regular"
            />
          </div>
          <div className="max-price-con">
            <Text variant="explan_bold" content={"낙찰된 가격"} />
            <Text
              color={"#344fff"}
              variant="explan_bold"
              content={maxPrice.toLocaleString() + "원"}
            />
          </div>
        </PostItem.Container>
        {/* <PostItem.ButtonContainer
          buttonText={"받은 후기 보기"}
          onTextButtonClick={onTextButtonClick}
          icon={DownIcon}
          onIconButtonClick={onIconButtonClick}
        /> */}
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
    //address,
    //uploadTime,
    expiredTime,
    //maxPrice,
    //onTextButtonClick,
    //onIconButtonClick,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          {/* <PostItem.LocationAndTime address={address} uploadTime={uploadTime} /> */}
          <div className="remain-con">
            <PostItem.RemainingTime expiredTime={expiredTime} />
          </div>
          <div className="price-con">
            <PostItem.Price
              title={"최소 입찰가 ·"}
              price={price}
              variant="tag_regular"
            />
          </div>
          <div className="max-price-con">
            <Text variant="explan_bold" content={"현재 입찰가"} />
            <Text
              color={"#344fff"}
              variant="explan_bold"
              content={price.toLocaleString() + "원"}
            />
          </div>
        </PostItem.Container>
        {/* <PostItem.ButtonContainer
          buttonText={"끌어올리기"}
          onTextButtonClick={onTextButtonClick}
          icon={DownIcon}
          onIconButtonClick={onIconButtonClick}
        /> */}
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
    //address,
    //uploadTime,
    expiredTime,
    maxPrice,
    onClick,
  }: IPost) => {
    return (
      <PostItem key={productId} onClick={onClick}>
        <PostItem.Image imgUrl={imgUrl} size={"default"} />
        <PostItem.Container>
          <PostItem.Title title={title} />
          {/* <PostItem.LocationAndTime address={address} uploadTime={uploadTime} /> */}
          <div className="remain-con">
            <PostItem.RemainingTime expiredTime={expiredTime} />
          </div>
          <div className="price-con">
            <PostItem.Price
              title={"최소 입찰가 ·"}
              price={price}
              variant="tag_regular"
            />
          </div>
          <div className="max-price-con">
            <Text variant="explan_bold" content={"나의 입찰가"} />
            <Text
              color={"#344fff"}
              variant="explan_bold"
              content={maxPrice.toLocaleString() + "원"}
            />
          </div>
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
