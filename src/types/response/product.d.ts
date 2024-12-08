import type { IResponse } from "types";

/**
 * 제품 상세 데이터 타입
 */
export interface IProductDetail {
  seller: {
    id: number;
    name: string;
    image: string;
  };
  productLocation: {
    longitude: number;
    latitube: number;
    address: string;
    location: string;
  };
  hasBuyer: boolean;
  productId: number;
  title: string;
  content: string;
  minimumPrice: number;
  category: string;
  uploadTime: string;
  expiredTime: string;
  isEarly: boolean;
  images: string[];
  myAuctionId: number | null;
  myPrice: number | null;
  winningPrice: number | null;
  isSeller: boolean;
}

/**
 * 제품 상세 응답 타입
 */
export interface IProductDetailResponse extends IResponse {
  result: IProductDetail | null;
}

export interface IProductPost {
  title: string;
  content: string;
  minimumPrice: number;
  category: Category;
  latitude: number;
  longitude: number;
  address: string;
  location: string;
  expiredTime?: string;
  images?: File[];
}

export interface IProductResponse extends IResponse {
  result: null;
}
