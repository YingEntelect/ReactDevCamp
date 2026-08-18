import type { ProductResponseModelType } from "@project/services";

export type ProductCatalogueProps = {
  products: ProductResponseModelType[];
  loading?: boolean;
};
