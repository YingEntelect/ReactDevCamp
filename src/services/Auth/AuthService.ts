import axios, { isAxiosError } from "axios";

import type { LoginResponseModelType } from "./types";
import { loginResponseModel } from "./LoginResponseModel";

const baseUrl = import.meta.env.VITE_API_URL;
const authUrl = `${baseUrl}/token`;

export const login = async (
  username: string,
  password: string,
): Promise<LoginResponseModelType> => {
  try {
    const response = await axios.post(authUrl, undefined, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });

    const data = loginResponseModel(response.data);

    return Promise.resolve(data);
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return loginResponseModel(error.response.data);
    }

    return Promise.reject(error);
  }
};
