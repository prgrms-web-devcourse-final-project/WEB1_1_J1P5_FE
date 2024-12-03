import type { ComponentProps } from "react";
import { ImageSlider } from "components/molecules";
import {
  AuctionControlBar,
  AuctionTimer,
  Comment,
  ItemDetails,
  LocationMap,
  Profile,
} from "components/organisms";
import type { ICommentItemProps } from "components/organisms/CommentItem";
import type { ICoord } from "types";
import { DetailTemplateWrapper, ImageSliderAndTimer } from "./styled";

interface IBaseDetailTemplateProps {
  /** 판매자 정보 */
  seller: {
    id: number;
    name: string;
    image: string;
  };
  /** 이미지 목록 */
  images: string[];
  /** 마감일자 */
  expiredTime: string;
  /** 카테고리 */
  category: string;
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /** 작성일자 */
  uploadTime: string;
  /** 거래 희망 장소 */
  productLocation: {
    coordinate: ICoord;
    address: string;
    location: string;
  };
  /** 거래 희망 장소 클릭 시 이벤트 */
  onLocationClick: () => void;
  /** 댓글 목록 */
  comments: ICommentItemProps[];
  /** 댓글 작성 함수 */
  onWriteComment: (message: string) => void;
  /** AuctionControlBar 입찰가격 */
  bids: ComponentProps<typeof AuctionControlBar.BidContainer>["bids"];
  /** AuctionControlBar 버튼들 */
  buttons: ComponentProps<typeof AuctionControlBar.ButtonContainer>["buttons"];
}

export const DetailTemplate = ({
  // 이미지 슬라이더
  images,
  // AuctionTimer
  expiredTime,
  // 아이템 상세
  category,
  title,
  content,
  uploadTime,
  // 판매자 정보
  seller: { name, image },
  // 거래 희망 장소
  productLocation: { coordinate, address, location },
  onLocationClick,
  // 댓글
  comments,
  onWriteComment,
  // AuctionControlBar
  bids,
  buttons,
}: IBaseDetailTemplateProps) => {
  return (
    <DetailTemplateWrapper>
      <ImageSliderAndTimer>
        <ImageSlider imgUrls={images} />
        <AuctionTimer targetDate={new Date(expiredTime)} />
      </ImageSliderAndTimer>
      <ItemDetails
        title={title}
        category={category}
        createdAt={uploadTime}
        description={content}
      />
      <Profile imgUrl={image} nickname={name} location={address} />
      <LocationMap
        coord={coordinate}
        location={location}
        onClick={onLocationClick}
      />
      <Comment comments={comments} onWriteComment={onWriteComment} />
      <AuctionControlBar>
        <AuctionControlBar.BidContainer bids={bids} />
        <AuctionControlBar.ButtonContainer buttons={buttons} />
      </AuctionControlBar>
    </DetailTemplateWrapper>
  );
};
