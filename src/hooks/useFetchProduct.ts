import { useQuery } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import { getProduct } from "services/apis";

export const useFetchProduct = (productId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: queries.product.detail(productId),
    queryFn: () => getProduct(productId),
    select: (data) => data.result,
    // [May]: productId가 있어서 호출 가능하도록 수정해보는것도 좋을거같습니다.
    enabled: productId !== "",
  });

  return { product: data, isProductLoading: isLoading };
};
