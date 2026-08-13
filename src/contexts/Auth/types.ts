import type { ReactNode } from "react";

export type AuthContextValue = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, rememberMe: boolean) => void;
  logout: () => void;
  mockLogin: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};
