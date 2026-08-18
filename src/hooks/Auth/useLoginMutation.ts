import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  login as authServiceLogin,
  writeStoredToken,
} from "@project/services";

import { authTokenKey } from "./authTokenKey";

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
      writeStoredToken(token, rememberMe);
      queryClient.setQueryData(authTokenKey, token);
    },
  });
};
