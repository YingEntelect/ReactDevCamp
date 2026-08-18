import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { clearStoredToken } from "@project/services";

import { authTokenKey } from "./authTokenKey";

export const useSignOut = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    clearStoredToken();
    queryClient.setQueryData(authTokenKey, null);
    navigate("/login");
  };
};
