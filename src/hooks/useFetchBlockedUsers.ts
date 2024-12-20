import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getBlockedUsers } from "services/apis";
import { queries } from "constants/queryKeys";
import { useEffect } from "react";

// TODO: 서버에서 임시로 페이지네이션을 유지하도록 백엔드와 논의 후 무한 스크롤 적용
// 현재는 size: 100으로 무한 스크롤이되, 그냥 불러오는 것과 유사하게 처리
export const useFetchBlockedUsers = () => {
  const queryClient = useQueryClient();

  useEffect(
    () => {
      return () => {
        // 언마운트 시 캐시 제거
        queryClient.removeQueries({ queryKey: queries.block.DEFAULT });
      };
    },
    [queryClient]
  );

  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: queries.block.DEFAULT,
    queryFn: ({ pageParam }) => getBlockedUsers({ page: pageParam, size: 100 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.result.hasNext ? pages.length : undefined,
    select: data => ({
      pages: data.pages.flatMap(page => page.result.content),
      pageParams: data.pageParams,
    }),
  });

  const { ref, inView } = useInView({
    rootMargin: "400px",
  });

  useEffect(
    () => {
      if (inView) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        fetchNextPage();
      }
    },
    [inView]
  );

  return {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    ref,
  };
};
