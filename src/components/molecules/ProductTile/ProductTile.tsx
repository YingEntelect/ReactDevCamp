import type { FC } from "react";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";

import { ProductImage } from "@project/components";

import type { ProductTileProps } from "./types";

export const ProductTile: FC<ProductTileProps> = ({
  product,
  containerClassName,
}) => (
  <a
    href={`/products/${product.id}`}
    className={twMerge(
      "w-72 p-3 rounded-lg flex flex-col border-2 border-[#C7C7CC] cursor-pointer items-start shrink-0 snap-start space-y-1",
      containerClassName,
    )}
    type="button"
  >
    <div className="w-full items-center justify-center flex flex-row">
      <div className="h-32 w-full rounded-lg overflow-hidden">
        <ProductImage imageUrl={product.imageUrl} alt={product.name} />
      </div>
    </div>
    <span className="text-lg font-bold line-clamp-1 text-left h-7 max-w-4/5">
      {product.name}
    </span>
    <span className="text-[#8E8E93] h-6 w-36 text-left">{`R${product.price}`}</span>
  </a>
);
