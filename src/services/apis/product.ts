import { http } from "services/api";
import type { IProductDetailResponse } from "types";

export const getProduct = async (productId: string) => {
  return http.get<IProductDetailResponse>(`products/${productId}`);
};
