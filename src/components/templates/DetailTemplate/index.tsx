import { createPortal } from "react-dom";
import { ImageSlider } from "components/molecules";
import {
  AuctionBidBottomSheet,
  AuctionControlBar,
  AuctionTimer,
  Comment,
  ItemDetails,
  LocationMap,
  Profile,
} from "components/organisms";
import { DetailTemplateWrapper, ImageSliderAndTimer } from "./styled";
import { useBid, useDetailModal, useFetchProduct } from "hooks";
import { buttonNames, priceNames } from "constants/auctionControlBarNames";
import type { IComment, IProductDetail } from "types";
import { LOGO_PATH } from "constants/imgPath";
import { isExpired } from "utils";
import { useMemo } from "react";

interface IBaseDetailTemplateProps
  extends Omit<IProductDetail, "winningPrice"> {
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
    longitude: number;
    latitube: number;
    address: string;
    location: string;
  };
  /** 거래 희망 장소 클릭 시 이벤트 */
  onLocationClick: () => void;
  /** 댓글 목록 */
  comments: IComment[];
  /** 최소 입찰가 */
  minimumPrice: number;
  /** 내 입찰가 */
  myPrice: IProductDetail["myPrice"];
  /** 최고 입찰가 */
  maximumPrice: IProductDetail["winningPrice"];
  /** 입찰 취소 */
  onCancel: () => void;
  /** 조기마감 */
  onEarlyClosing: () => void;
  /** 판매자인지 여부 */
  isSeller: boolean;
}

export const DetailTemplate = ({
  productId,
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
  productLocation: { longitude, latitube, address, location },
  onLocationClick,
  // 댓글
  comments,
  // 가격
  minimumPrice,
  maximumPrice,
  myPrice,
  myAuctionId,
  isEarly,
  onCancel,
  onEarlyClosing,
  // 판매자 여부
  isSeller,
  // 구매자 있는지 여부
  hasBuyer,
}: IBaseDetailTemplateProps) => {
  const modal = useDetailModal();
  const { productRefetch, isProductRefetching } = useFetchProduct(
    productId.toString(),
  );
  const {
    open,
    price,
    setPrice,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleBid,
  } = useBid(productId);
  const isExpiredTime = useMemo(
    () => isExpired(expiredTime),
    [isProductRefetching],
  );

  return (
    <DetailTemplateWrapper>
      <ImageSliderAndTimer>
        <ImageSlider imgUrls={images} />
        <AuctionTimer
          targetDate={new Date(expiredTime)}
          isEarly={isEarly}
          refetch={productRefetch}
        />
      </ImageSliderAndTimer>
      <ItemDetails
        title={title}
        category={category}
        createdAt={uploadTime}
        description={content}
      />
      {/* TODO 프로필 사진 없는 경우 Logo 사진 */}
      <Profile imgUrl={image || LOGO_PATH} nickname={name} location={address} />
      <LocationMap
        coord={{ lat: latitube, lng: longitude }}
        location={location}
        onClick={onLocationClick}
      />
      <Comment hasBuyer={hasBuyer} comments={comments} />
      {!isExpiredTime && (
        <AuctionControlBar>
          <AuctionControlBar.BidContainer>
            {(!isSeller || !maximumPrice) && (
              <AuctionControlBar.Bid
                title={priceNames.minimumPrice}
                price={minimumPrice}
              />
            )}
            {myPrice && (
              <AuctionControlBar.Bid
                title={priceNames.myPrice}
                price={myPrice}
              />
            )}
            {isSeller && maximumPrice && (
              <AuctionControlBar.Bid
                title={priceNames.maximumPrice}
                price={maximumPrice}
              />
            )}
          </AuctionControlBar.BidContainer>
          <AuctionControlBar.ButtonContainer>
            {!isSeller && !myPrice && (
              <AuctionControlBar.Button
                text={buttonNames.bid}
                onClick={handleOpenBottomSheet}
              />
            )}
            {myPrice && (
              <>
                <AuctionControlBar.Button
                  backgroundColor="grey"
                  text={buttonNames.cancel}
                  onClick={
                    isEarly
                      ? () => modal.cancelEarly()
                      : () => modal.cancel(onCancel)
                  }
                />
                <AuctionControlBar.Button
                  text={buttonNames.edit}
                  onClick={handleOpenBottomSheet}
                />
              </>
            )}
            {isSeller && maximumPrice && (
              <AuctionControlBar.Button
                backgroundColor="red"
                variant="btn_bold"
                text={
                  isEarly ? "경매 조기종료가 진행중입니다." : buttonNames.early
                }
                onClick={() => modal.earlyClosing(onEarlyClosing)}
                disabled={isEarly}
              />
            )}
          </AuctionControlBar.ButtonContainer>
        </AuctionControlBar>
      )}
      {createPortal(
        <AuctionBidBottomSheet
          price={price}
          setPrice={setPrice}
          minPrice={isEarly ? myPrice || minimumPrice : minimumPrice}
          beforePrice={myPrice || undefined}
          onBid={() =>
            handleBid(
              isEarly ? myPrice || minimumPrice : minimumPrice,
              myAuctionId || undefined,
              isEarly,
            )
          }
          open={open}
          onClose={handleCloseBottomSheet}
        />,
        document.body,
      )}
    </DetailTemplateWrapper>
  );
};
