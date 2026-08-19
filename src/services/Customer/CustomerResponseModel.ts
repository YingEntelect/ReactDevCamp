import type { CustomerResponseModelType, CustomerResponseType } from "./types";

export const customerResponseModel = (
  data: CustomerResponseType,
): CustomerResponseModelType => {
  return {
    id: data.id,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    idNumber: data.idNumber,
  };
};
