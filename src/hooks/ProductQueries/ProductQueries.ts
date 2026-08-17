import { useQuery } from "@tanstack/react-query";

import { getProductById, getProducts } from "@project/services";

import { productKeys } from "./productKeys";

export const useProductsQuery = () => {
  const { data, isPending, isFetching, isError, error, refetch } = useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,
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

export const useProductQuery = (id: number) => {
  const { data, isPending, isFetching, isError, error, refetch } = useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProductById(id),
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
