export type LoginResponseType = {
  success: string;
  errorMessage?: string;
  loginAccessKey?: string;
};

export type LoginResponseModelType = {
  success: boolean;
  errorMessage?: string;
  loginAccessKey?: string;
};
