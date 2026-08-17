import axios from "axios";

import { productResponseModel } from "./ProductResponseModel";
import type { ProductResponseType } from "./types";

const baseUrl = import.meta.env.VITE_CLIENT_API_URL;
const productsUrl = `${baseUrl}/products`;

export const getProducts = async () => {
  const response = await axios.get(productsUrl);
  const responseProductData: ProductResponseType[] = response.data;

  const data = responseProductData.map((product: ProductResponseType) =>
    productResponseModel(product),
  );

  return data;
};

export const getProductById = async (productId: number) => {
  const url = `${productsUrl}/${productId}`;

  const response = await axios.get(url);
  const data = productResponseModel(response.data);

  return data;
};
