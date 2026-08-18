import { useQuery } from "@tanstack/react-query";

import { readStoredToken } from "@project/services";

import { authTokenKey } from "./authTokenKey";

export const useAuthToken = () => {
  const { data: token } = useQuery({
    queryKey: authTokenKey,
    queryFn: readStoredToken,
    initialData: readStoredToken,
  });

  return {
    token: token ?? null,
    isAuthenticated: token !== null,
  };
};
