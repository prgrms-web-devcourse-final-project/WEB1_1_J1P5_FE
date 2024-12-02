import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import type { IResponse } from "types";

const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  withCredentials: true, // TODO 토큰 처리 방식 확정 이후 확인
  timeout: 10000,
});

/**
 * 응답
 * @param res
 */
const onResponse = <T extends IResponse>(res: AxiosResponse<T>) => {
  const { isSuccess } = res.data;
  if (isSuccess) {
    return res.data;
  } else {
    // isSuccess가 false일 때
    const { statusCode, message } = res.data;
    // TODO Error 처리
    console.log(statusCode, message);
  }
};

/**
 * Error가 발생한 응답
 * @param error
 */
const onError = <T extends IResponse>(error: AxiosError<T>) => {
  if (error.response) {
    const { statusCode, message } = error.response.data;
    // TODO Error 처리
    console.log(statusCode, message);
  }
  return Promise.reject(error);
};

api.interceptors.response.use(onResponse, onError);

/**
 * HTTP 요청을 상수입니다.
 * @example
 * http.get("/chat/:roomId");
 * http.post("/auctions/:productId", { price: 35000 });
 * http.patch("/user/profile", { profile: File, nickname: "닉네임123" }, { headers: { "Content-Type": "multipart/form-data", } });
 */
export const http = {
  /**
   * HTTP GET Method
   * @param url api 엔드포인트
   * @param params `optional` query parameter
   * @param options `optional` AxiosRequestConfig
   */
  get: async <T extends IResponse, P = undefined>(
    url: string,
    params?: P,
    options?: AxiosRequestConfig,
  ) => {
    return api.get<T>(url, { params, ...options });
  },
  /**
   * HTTP POST Method
   * @param url api 엔드포인트
   * @param data `optional` body
   * @param options `optional` AxiosRequestConfig
   */
  post: async <T extends IResponse, D = undefined>(
    url: string,
    data?: D,
    options?: AxiosRequestConfig,
  ) => {
    return api.post<T>(url, data && { ...data }, options);
  },
  /**
   * HTTP PUT Method
   * @param url api 엔드포인트
   * @param data `optional` body
   * @param options `optional` AxiosRequestConfig
   */
  put: async <T extends IResponse, D = undefined>(
    url: string,
    data?: D,
    options?: AxiosRequestConfig,
  ) => {
    return api.put<T>(url, data && { ...data }, options);
  },
  /**
   * HTTP PATCH Method
   * @param url api 엔드포인트
   * @param data `optional` body
   * @param options `optional` AxiosRequestConfig
   */
  patch: async <T extends IResponse, D = undefined>(
    url: string,
    data?: D,
    options?: AxiosRequestConfig,
  ) => {
    return api.patch<T>(url, data && { ...data }, options);
  },
  /**
   * HTTP DELETE Method
   * @param url api 엔드포인트
   * @param options `optional` AxiosRequestConfig
   */
  delete: async <T extends IResponse>(
    url: string,
    options?: AxiosRequestConfig,
  ) => {
    return api.delete<T>(url, options);
  },
} as const;
