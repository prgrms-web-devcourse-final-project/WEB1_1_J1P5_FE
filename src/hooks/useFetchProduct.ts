import { useQuery } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import { getProduct } from "services/apis";
import type { IProductDetail } from "types";

// 임시
const productData: IProductDetail = {
  productId: 1,
  images: [
    "https://github.com/moypp.png",
    "https://github.com/ppyom.png",
    "https://github.com/moypp.png",
    "https://github.com/ppyom.png",
  ],
  //
  expiredTime: "2024-12-10 11:00:00",
  //
  title: "물품 1",
  category: "카테고리",
  uploadTime: new Date().toString(),
  content: "물품의 설명입니다.",
  // 판매자 정보
  seller: {
    id: 1,
    name: "ppyom",
    image: "https://github.com/ppyom.png",
  },
  // 거래 희망 장소
  productLocation: {
    longtitude: 126.9784147,
    latitube: 37.5666805,
    address: "관악구 신림동",
    location: "보라매공원 CU",
  },
  minimumPrice: 35000,
  hasBuyer: false,
  isEarly: false,
  myPrice: 36000,
};

export const useFetchProduct = (productId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: queries.product.detail(productId),
    queryFn: () => getProduct(productId),
    select: (data) => data.result,
  });

  console.log(data, isLoading);

  // return { product: data || productData, isLoading };
  return { product: productData, isLoading: false };
};
