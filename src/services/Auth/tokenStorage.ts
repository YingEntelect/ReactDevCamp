const TOKEN_STORAGE_KEY = "authToken";

export const readStoredToken = (): string | null =>
  sessionStorage.getItem(TOKEN_STORAGE_KEY) ??
  localStorage.getItem(TOKEN_STORAGE_KEY);

export const writeStoredToken = (token: string, rememberMe: boolean): void => {
  const [storage, otherStorage] = rememberMe
    ? [localStorage, sessionStorage]
    : [sessionStorage, localStorage];

  otherStorage.removeItem(TOKEN_STORAGE_KEY);
  storage.setItem(TOKEN_STORAGE_KEY, token);
};

export const clearStoredToken = (): void => {
  sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};
