import axios, { isAxiosError } from "axios";

import { readStoredToken } from "../Auth/tokenStorage";
import { notifyUnauthorized, resetUnauthorizedGuard } from "./unauthorized";

export const authApiClient = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_API_URL,
});

authApiClient.interceptors.request.use((config) => {
  const token = readStoredToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

authApiClient.interceptors.response.use(
  (response) => {
    resetUnauthorizedGuard();
    return response;
  },
  (error: unknown) => {
    if (isAxiosError(error) && error.response?.status === 401) {
      notifyUnauthorized();
    }

    return Promise.reject(error);
  },
);
