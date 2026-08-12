import type { FC } from "react";

import type { ProductTileProps } from "./types";
import { ProductImage } from "../../atoms";

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <div className="w-72 p-3 rounded-lg flex flex-col border-2 border-[#C7C7CC]">
      <div className="w-full items-center justify-center flex flex-row">
        <div className="h-32 w-full rounded-lg bg-red-200 overflow-hidden">
          <ProductImage imageUrl={product.imageUrl} />
        </div>
      </div>
      <span className="text-lg font-bold w-full line-clamp-1">
        {product.name}
      </span>
      <span className="text-[#8E8E93]">{`R${product.price}`}</span>
    </div>
  );
};
