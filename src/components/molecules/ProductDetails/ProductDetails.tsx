import type { FC } from "react";

import type { ProductDetailsProps } from "./types";

import { CollapsibleProductDescription, ProductImage } from "../..";

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => (
  <div className="space-y-5 flex flex-col w-full max-w-250">
    <div className="max-w-96">
      <ProductImage imageUrl={product.imageUrl} percentageDiscount={30} />
    </div>
    <div className="flex flex-col w-full space-y-5">
      <span className="text-3xl font-bold">{product.name}</span>
      <CollapsibleProductDescription description={product.description} />
    </div>
  </div>
);
