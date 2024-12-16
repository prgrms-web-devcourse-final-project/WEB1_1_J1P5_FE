import { http } from "services/api";
import type { ITransactionQueryParams, ITransactionResponse } from "types";

const SIZE = 30 as const;

/**
 * 내가 판매중인 상품 목록을 가져오는 함수
 */
export const getInProgressProducts = async () =>
  // cursor: ITransactionQueryParams["cursor"] = 1,
  {
    return http.get<ITransactionResponse, ITransactionQueryParams>(
      `/products/my`,
      {
        // cursor,
        size: SIZE,
        status: "IN_PROGRESS",
      },
    );
  };

/**
 * 내 판매 완료 상품 목록을 가져오는 함수
 */
export const getCompletedProducts = async () =>
  // cursor: ITransactionQueryParams["cursor"] = 1,
  {
    return http.get<ITransactionResponse, ITransactionQueryParams>(
      `/products/my`,
      {
        // cursor,
        size: SIZE,
        status: "COMPLETED",
      },
    );
  };
