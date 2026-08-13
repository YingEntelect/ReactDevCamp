import type { FC } from "react";
import { Route, Routes } from "react-router";

import { LoginScreen } from "@project/components";

export const UnauthRouter: FC = () => (
  <Routes>
    <Route index element={<LoginScreen />} />
  </Routes>
);
