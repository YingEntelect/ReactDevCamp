import type { FC } from "react";
import { BrowserRouter } from "react-router";

import { AppRouter } from "../AppRouter";
import { SessionBridge } from "../SessionBridge";

export const RootRouter: FC = () => (
  <BrowserRouter>
    <SessionBridge />
    <AppRouter />
  </BrowserRouter>
);
