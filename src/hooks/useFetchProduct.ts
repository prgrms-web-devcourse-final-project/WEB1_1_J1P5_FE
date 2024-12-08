import { useQuery } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import { getProduct } from "services/apis";

export const useFetchProduct = (productId: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: queries.product.detail(productId),
    queryFn: () => getProduct(productId),
    select: (data) => data.result,
  });

  return {
    product: data,
    isProductLoading: isLoading,
    productRefetch: refetch,
  };
};
