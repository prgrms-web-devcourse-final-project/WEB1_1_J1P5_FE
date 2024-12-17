import axios from "axios";
import { http } from "services/api";
import type {
  IProductDetailResponse,
  IProductPost,
  IProductResponse,
} from "types";

/**
 * 제품 상세 데이터를 가져오는 함수
 * @param productId 아이디
 */
export const getProduct = async (productId: string) => {
  return http.get<IProductDetailResponse>(`/products/${productId}`);
};

/**
 * 조기 마감
 */
export const earlyClose = async (productId: string) => {
  return http.post(`/products/${productId}/early-close`);
};

/**
 * 중고 제품 게시글 등록하기
 * @param newProduct 등록할 제품 데이터
 * @returns
 */
export const registerProduct = async (
  newProduct: IProductPost
): Promise<void> => {
  const requestBody = new FormData();
  const jsonRequestData = JSON.stringify({
    title: newProduct.title,
    content: newProduct.content,
    minimumPrice: newProduct.minimumPrice,
    category: newProduct.category,
    latitude: newProduct.latitude,
    longitude: newProduct.longitude,
    address: newProduct.address,
    location: newProduct.location,
    expiredTime: newProduct.expiredTime,
  });

  const request = new Blob([jsonRequestData], { type: "application/json" });
  requestBody.append("request", request);
  newProduct.images!.forEach((img) => {
    requestBody.append("images", img);
  });

  // HTTP 요청 전송
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/products`,
      requestBody,
      {
        withCredentials: true,
      }
    );
    console.log("Response:", res.data); // 요청 성공 시 응답 데이터 출력
    return res.data; // 요청 성공 시 응답 데이터 반환
  } catch (error) {
    console.error("Error:", error); // 요청 실패 시 에러 출력
    throw error; // 에러를 다시 던져서 호출하는 곳에서 처리할 수 있도록 함
  }

  // TODO: 이걸로 하면 500 에러 뜨는 원인 찾기
  // try {
  //   await http.post<IProductsResponse, typeof requestBody>(
  //     "/products",
  //     requestBody,
  //     {
  //       withCredentials: true,
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       }
  //     }
  //   );
  // } catch (error) {
  //   console.error("Failed to submit new product:", error);
  // }
};

/**
 * 중고 제품 게시글 수정하기
 * @param productId 수정할 제품 id
 * @param updatedProduct 수정할 제품 데이터
 * @returns
 */
export const editProduct = async (
  productId: number,
  updatedProduct: Omit<IProductPost, "images" | "expiredTime">
) => {
  console.log("updatedProduct", updatedProduct);
  return http.patch<IProductResponse, typeof updatedProduct>(
    `/products/${productId}`,
    updatedProduct
  );
};

/**
 * 중고 제품 게시글 삭제하기
 * @param productId 삭제할 제품 id
 */
export const deleteProduct = async (productId: string) => {
  return http.delete<IProductResponse>(`/products/${productId}`);
};

/**
 * 중고 제품 게시글 거래 완료하기기
 * @param productId 거래 완료 제품 id
 */
export const completeProduct = async (productId: string) => {
  return http.patch<IProductResponse>(`/products/${productId}/complete`);
};
