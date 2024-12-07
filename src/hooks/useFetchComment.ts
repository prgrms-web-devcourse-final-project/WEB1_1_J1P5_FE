import { useQuery } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import { getComments } from "services/apis";

export const useFetchComment = (productId: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: queries.comment.DEFAULT(productId),
    queryFn: () => getComments(productId, 0),
    select: (data) => data.result,
  });

  return {
    comments: data || [],
    isCommentLoading: isLoading,
    fetchComments: refetch,
  };
};
