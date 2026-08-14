import { useQuery } from "@tanstack/react-query";

import { authTokenKey, TOKEN_STORAGE_KEY } from "./authTokenKey";

export const readStoredToken = (): string | null =>
  sessionStorage.getItem(TOKEN_STORAGE_KEY) ??
  localStorage.getItem(TOKEN_STORAGE_KEY);

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
