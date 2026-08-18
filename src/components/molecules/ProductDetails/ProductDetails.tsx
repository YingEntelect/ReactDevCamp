import type { FC } from "react";

import {
  CollapsibleProductDescription,
  ProductImage,
} from "@project/components";

import type { ProductDetailsProps } from "./types";

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => (
  <div className="space-y-5 flex flex-col w-full max-w-250">
    <div className="max-w-96 h-80 rounded-lg overflow-hidden">
      <ProductImage
        imageUrl={product.imageUrl}
        percentageDiscount={30}
        alt={product.name}
      />
    </div>
    <div className="flex flex-col w-full space-y-5">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <CollapsibleProductDescription description={product.description} />
    </div>
  </div>
);
