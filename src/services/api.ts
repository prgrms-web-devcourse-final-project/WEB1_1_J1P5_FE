import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import type { IResponse } from "types";

const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
  withCredentials: true,
  timeout: 10000,
});

/**
 * 응답
 * @param res
 */
const onResponse = (res: AxiosResponse) => {
  const { success } = res.data;
  if (success) {
    return res;
  } else {
    // isSuccess가 false일 때
    const { code, message } = res.data;
    // TODO Error 처리
    console.log(code, message);
    return Promise.reject(res);
  }
};

/**
 * Error가 발생한 응답
 * @param error
 */
const onError = <T extends IResponse>(error: AxiosError<T>) => {
  if (error.response) {
    const { code, message } = error.response.data;
    // TODO Error 처리
    console.log(code, message);
  }
  return Promise.reject(error);
};

const responseToData = <T extends IResponse>(res: AxiosResponse<T>): T => {
  return res.data;
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
    return api
      .get<T>(url, { params: params && { ...params }, ...options })
      .then(responseToData);
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
    return api.post<T>(url, data && { ...data }, options).then(responseToData);
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
    return api.put<T>(url, data && { ...data }, options).then(responseToData);
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
    return api.patch<T>(url, data && { ...data }, options).then(responseToData);
  },
  /**
   * HTTP DELETE Method
   * @param url api 엔드포인트
   * @param data `optional` body
   * @param options `optional` AxiosRequestConfig
   */
  delete: async <T extends IResponse, D = undefined>(
    url: string,
    data?: D,
    options?: AxiosRequestConfig,
  ) => {
    return api.delete<T>(url, { data, ...options }).then(responseToData);
  },
} as const;
