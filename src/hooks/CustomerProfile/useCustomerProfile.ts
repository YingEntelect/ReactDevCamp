import { useQuery } from "@tanstack/react-query";

import { getProfile } from "@project/services";

import { customerProfileKey } from "./customerProfileKey";

export const useCustomerProfile = () => {
  const { data, isPending, isFetching, isError, error, refetch } = useQuery({
    queryKey: customerProfileKey,
    queryFn: getProfile,
  });

  return {
    data,
    isPending,
    isFetching,
    isError,
    error,
    refetch,
  };
};
