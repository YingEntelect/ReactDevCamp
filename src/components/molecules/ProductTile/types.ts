import type { ProductResponseModelType } from "@project/services";

export type ProductTileProps = {
  product: ProductResponseModelType;
  containerClassName?: string;
};

export type ProductTileSkeletonProps = Pick<
  ProductTileProps,
  "containerClassName"
>;
