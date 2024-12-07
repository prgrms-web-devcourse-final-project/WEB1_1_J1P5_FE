import { useQuery } from "@tanstack/react-query";
import { getBidding } from "services/apis";
import { queries } from "constants/queryKeys";

export const useFetchBidding = () => {
  const { data, isLoading } = useQuery({
    queryKey: queries.auction.bidding,
    queryFn: getBidding,
    select: (data) => data.result,
  });
  return { biddingList: data || [], isLoading };
};
