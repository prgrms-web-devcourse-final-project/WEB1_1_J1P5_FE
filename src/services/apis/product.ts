import { http } from "services/api";
import type { IProductDetailResponse } from "types";

/**
 * 제품 상세 데이터를 가져오는 함수
 * @param productId 아이디
 */
export const getProduct = async (productId: string) => {
  return http.get<IProductDetailResponse>(`products/${productId}`);
};
