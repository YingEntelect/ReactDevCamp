import { useQueryClient } from "@tanstack/react-query";
import { useEffect, type FC } from "react";
import { useNavigate } from "react-router";

import { authTokenKey } from "@project/hooks";
import { clearStoredToken, setUnauthorizedHandler } from "@project/services";

export const SessionBridge: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    setUnauthorizedHandler(() => {
      clearStoredToken();

      queryClient.setQueryData(authTokenKey, null);

      navigate("/login", {
        state: { from: { pathname: window.location.pathname } },
      });
    });

    return () => setUnauthorizedHandler(null);
  }, [navigate, queryClient]);

  return null;
};
