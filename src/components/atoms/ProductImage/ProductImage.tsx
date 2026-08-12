import type { FC } from "react";

import type { ProductImageProps } from "./types";

export const ProductImage: FC<ProductImageProps> = ({
  imageUrl,
  percentageDiscount,
}) => (
  <div className="w-full h-full rounded-lg relative bg-white flex items-center justify-center">
    {!!percentageDiscount && (
      <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-lg absolute left-5 top-5">
        <span className="text-white text-center w-10">{`${percentageDiscount}% OFF`}</span>
      </div>
    )}
    <img src={imageUrl} className="w-full h-full object-cover" />
  </div>
);
