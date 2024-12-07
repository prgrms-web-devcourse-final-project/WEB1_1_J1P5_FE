import type { IResponse } from "types";

export interface IAuction {
  productId: number;
  auctionId: number;
  productTitle: string;
  productImage: string;
  bidPrice: number;
  sellerAddress: string;
  productCreatedAt: string;
  minPrice: number;
  expireTime: string;
}

export interface IAuctionBid {
  productId: number;
  auctionId?: number;
  price: number;
}

export interface IAuctionResponse extends IResponse {
  result: {};
}

export interface IAuctionBidResponse extends IResponse {
  result: {
    auctionId: number;
    price: number;
  };
}

export interface IGetBiddingResponse extends IResponse {
  result: IAuction[];
}
