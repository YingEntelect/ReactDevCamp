import type { ProductResponseModelType, ProductResponseType } from "./types";

export const productResponseModel = (
  data: ProductResponseType,
): ProductResponseModelType => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    imageUrl: !data.imageUrl
      ? "https://placehold.net/600x600.png"
      : data.imageUrl,
  };
};
