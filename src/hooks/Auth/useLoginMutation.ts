import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as authServiceLogin } from "@project/services";

import { authTokenKey, TOKEN_STORAGE_KEY } from "./authTokenKey";

type LoginMutationVariables = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      username,
      password,
      rememberMe,
    }: LoginMutationVariables) => {
      const response = await authServiceLogin(username, password);

      if (!response.loginAccessKey) {
        throw new Error(response.errorMessage ?? "An unknown error occurred");
      }

      return { token: response.loginAccessKey, rememberMe };
    },
    onSuccess: ({ token, rememberMe }) => {
      const storage = rememberMe ? localStorage : sessionStorage;
      const otherStorage = rememberMe ? sessionStorage : localStorage;

      otherStorage.removeItem(TOKEN_STORAGE_KEY);
      storage.setItem(TOKEN_STORAGE_KEY, token);
      queryClient.setQueryData(authTokenKey, token);
    },
  });
};
