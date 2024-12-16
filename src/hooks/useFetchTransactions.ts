import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import {
  getBidding,
  getCompletedBidding,
  getCompletedProducts,
  getInProgressProducts,
} from "services/apis";
import type {
  IAuction,
  IGetBiddingResponse,
  ITransactionProduct,
  ITransactionResponse,
} from "types";

export type TransactionType = "buy" | "sell";
export type TransactionTab = "in_progress" | "completed";

/**
 * ReactQuery 요청 시 사용할 key와 function을 가져올 때 사용할 함수
 * @param type 현재 페이지 타입
 * @param tab 현재 선택되어있는 탭
 */
const getQuery = (
  type: TransactionType,
  tab: TransactionTab,
): UseQueryOptions<ITransactionResponse | IGetBiddingResponse> => {
  if (type === "sell") {
    // 판매자 입장
    if (tab === "in_progress") {
      // 판매중
      return {
        queryKey: queries.transaction.sell.in_progress,
        queryFn: () => getInProgressProducts(),
      };
    } else {
      // 판매 완료
      return {
        queryKey: queries.transaction.sell.completed,
        queryFn: () => getCompletedProducts(),
      };
    }
  } else {
    if (tab === "in_progress") {
      // 구매중
      return {
        queryKey: queries.auction.bidding,
        queryFn: () => getBidding(),
      };
    } else {
      // 구매 완료
      return {
        queryKey: queries.auction.purchases,
        queryFn: () => getCompletedBidding(),
      };
    }
  }
};

export const useFetchTransactions = (
  type: TransactionType,
  tab: TransactionTab,
) => {
  // TODO 이후 useInfinityQuery로 변경해서 무한스크롤 구현?? ㅠ..
  const { data, isLoading } = useQuery({
    ...getQuery(type, tab),
    select: (data) =>
      "content" in data.result
        ? (data.result.content as ITransactionProduct[])
        : (data.result as IAuction[]),
  });

  return {
    products: data || null,
    isLoading,
  };
};
