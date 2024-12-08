import { useQuery } from "@tanstack/react-query";
import { queries } from "constants/queryKeys";
import { getUserSession } from "services/apis";

export const useFetchSession = () => {
  const { data, isLoading } = useQuery({
    queryKey: queries.session.DEFAULT,
    queryFn: getUserSession,
    select: (data) => data.result,
    retry: false,
  });
  return {
    sessionUser: data,
    isLoading,
  };
};
