import type { FC } from "react";
import { Route, Routes } from "react-router";

import {
  LoginScreen,
  NotFoundScreen,
  ProductDetailsScreen,
  ProductsScreen,
} from "@project/components";

export const AppRouter: FC = () => (
  <Routes>
    <Route index element={<ProductsScreen />} />
    <Route path="products/:id" element={<ProductDetailsScreen />} />
    <Route path="login" element={<LoginScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
  </Routes>
);
