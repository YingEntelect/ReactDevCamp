import { useCallback, useMemo, useState } from "react";

import type { AuthContextValue, AuthProviderProps } from "./types";
import { AuthContext } from "./AuthContext";

const TOKEN_STORAGE_KEY = "authToken";

const readStoredToken = (): string | null =>
  sessionStorage.getItem(TOKEN_STORAGE_KEY) ??
  localStorage.getItem(TOKEN_STORAGE_KEY);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => readStoredToken());

  const login = useCallback((newToken: string, rememberMe: boolean) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    const otherStorage = rememberMe ? sessionStorage : localStorage;

    otherStorage.removeItem(TOKEN_STORAGE_KEY);
    storage.setItem(TOKEN_STORAGE_KEY, newToken);
    setToken(newToken);
  }, []);

  const mockLogin = useCallback(() => {
    const mockToken = "ABC123";
    sessionStorage.setItem(TOKEN_STORAGE_KEY, mockToken);
    setToken(mockToken);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setToken(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      isAuthenticated: token !== null,
      login,
      logout,
      mockLogin,
    }),
    [token, login, logout, mockLogin],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
