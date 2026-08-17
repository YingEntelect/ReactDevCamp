import type { FC } from "react";
import { BrowserRouter } from "react-router";

import { useAuthToken } from "@project/hooks";

import { AuthRouter } from "../AuthRouter";
import { UnauthRouter } from "../UnauthRouter";

export const RootRouter: FC = () => {
  const { isAuthenticated } = useAuthToken();

  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthRouter /> : <UnauthRouter />}
    </BrowserRouter>
  );
};
