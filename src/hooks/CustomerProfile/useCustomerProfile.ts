import { useQuery } from "@tanstack/react-query";

import { getProfile } from "@project/services";

import { customerProfileKey } from "./customerProfileKey";

export const useCustomerProfile = (enabled = true) => {
  const { data, isPending, isFetching, isError, error, refetch } = useQuery({
    queryKey: customerProfileKey,
    queryFn: getProfile,
    enabled,
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
