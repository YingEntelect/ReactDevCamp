import { customerResponseModel } from "./CustomerResponseModel";
import type { CustomerResponseType } from "./types";
import { authApiClient } from "../ApiClient";

const baseUrl = import.meta.env.VITE_CLIENT_API_URL;
const profileUrl = `${baseUrl}/profile`;

export const getProfile = async () => {
  const response = await authApiClient.get(profileUrl);
  const data: CustomerResponseType = response.data;

  return customerResponseModel(data);
};
