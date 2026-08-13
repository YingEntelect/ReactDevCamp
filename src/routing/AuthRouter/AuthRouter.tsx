import { ProductDetailsScreen } from "@project/components";
import type { FC } from "react";
import { Route, Routes } from "react-router";

export const AuthRouter: FC = () => (
  <Routes>
    <Route index element={<ProductDetailsScreen />} />
  </Routes>
);
