import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router";

import {
  KYCSubmissionScreen,
  LoginScreen,
  NotFoundScreen,
  ProductDetailsScreen,
  ProductsScreen,
} from "@project/components";

export const AppRouter: FC = () => (
  <Routes>
    <Route index element={<Navigate to="/login" replace />} />
    <Route path="login" element={<LoginScreen />} />
    <Route path="products" element={<ProductsScreen />} />
    <Route path="products/:id" element={<ProductDetailsScreen />} />
    <Route path="kyc" element={<KYCSubmissionScreen />} />
    <Route path="*" element={<NotFoundScreen />} />
  </Routes>
);
