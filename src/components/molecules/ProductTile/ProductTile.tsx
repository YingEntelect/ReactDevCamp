import type { FC } from "react";

import type { ProductTileProps } from "./types";
import { ProductImage } from "../../atoms";

export const ProductTile: FC<ProductTileProps> = ({ product }) => {
  return (
    <button
      className="w-72 p-3 rounded-lg flex flex-col border-2 border-[#C7C7CC] cursor-pointer items-start shrink-0 snap-start"
      type="button"
    >
      <div className="w-full items-center justify-center flex flex-row">
        <div className="h-32 w-full rounded-lg overflow-hidden">
          <ProductImage imageUrl={product.imageUrl} alt="" />
        </div>
      </div>
      <span className="text-lg font-bold line-clamp-1 text-left">
        {product.name}
      </span>
      <span className="text-[#8E8E93]">{`R${product.price}`}</span>
    </button>
  );
};
