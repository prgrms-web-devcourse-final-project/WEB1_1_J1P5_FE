import { http } from "services/api";
import type {
  IAuctionBid,
  IAuctionBidResponse,
  IAuctionResponse,
  IGetBiddingResponse,
} from "types";

/**
 * 입찰내역 조회
 */
export const getBidding = async () => {
  return http.get<IGetBiddingResponse>("/auctions/bidding");
};

/**
 * 입찰 후 거래완료 내역 조회
 */
export const getCompletedBidding = async () => {
  return http.get<IGetBiddingResponse>("/auctions/purchases");
};


/**
 * 입찰하기
 */
export const bidding = async ({ productId, price }: IAuctionBid) => {
  return http.post<IAuctionBidResponse, IAuctionBid>("/auctions/bid", {
    productId,
    price,
  });
};

/**
 * 입찰 수정하기
 */
export const editBidding = async ({
  productId,
  auctionId,
  price,
}: Required<IAuctionBid>) => {
  return http.patch<IAuctionBidResponse, Required<IAuctionBid>>(
    "/auctions/bid",
    { productId, auctionId, price },
  );
};

/**
 * 입찰 취소하기
 */
export const cancelBidding = async (auctionId: IAuctionBid["auctionId"]) => {
  return http.delete<IAuctionResponse>(`/auctions/${auctionId}`);
};
