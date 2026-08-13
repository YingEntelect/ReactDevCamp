import type { FC } from "react";
import { BrowserRouter } from "react-router";

import { useAuth } from "@project/contexts";

import { AuthRouter } from "../AuthRouter";
import { UnauthRouter } from "../UnauthRouter";

export const RootRouter: FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {isAuthenticated ? <AuthRouter /> : <UnauthRouter />}
    </BrowserRouter>
  );
};
