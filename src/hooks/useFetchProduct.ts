import { useQuery } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import { getProduct } from "services/apis";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const useFetchProduct = (productId: string) => {
  const navigate = useNavigate();
  const { data, isLoading, refetch, isRefetching, isError, error } = useQuery({
    queryKey: queries.product.detail(productId),
    queryFn: () => getProduct(productId),
    select: (data) => data.result,
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      if (error instanceof AxiosError) {
        const { code } = error.response?.data;
        if (code === "PRODUCT410") {
          // PRODUCT410 삭제된 게시물
          navigate("/", { replace: true });
        }
        if (code === "PRODUCT404") {
          // PRODUCT404 조회 실패
          navigate("/error", { replace: true });
        }
        // 그 이외 처리
        navigate("/", { replace: true });
      }
    }
  }, [isError]);

  return {
    product: data,
    isProductLoading: isLoading,
    productRefetch: refetch,
    isProductRefetching: isRefetching,
  };
};
