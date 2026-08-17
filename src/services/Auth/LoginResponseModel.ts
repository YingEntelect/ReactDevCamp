import type { LoginResponseModelType, LoginResponseType } from "./types";

export const loginResponseModel = (
  data: LoginResponseType,
): LoginResponseModelType => {
  return {
    success: data.success === "true",
    errorMessage: data.errorMessage,
    loginAccessKey: data.loginAccessKey,
  };
};
