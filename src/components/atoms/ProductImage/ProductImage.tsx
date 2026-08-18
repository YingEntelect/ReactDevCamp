import { useState, type FC } from "react";

import { ProductImageSkeleton } from "./ProductImageSkeleton";
import type { ProductImageProps } from "./types";

export const ProductImage: FC<ProductImageProps> = ({
  imageUrl,
  percentageDiscount,
  alt,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="w-full h-full relative bg-white flex items-center justify-center">
      {!!percentageDiscount && (
        <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-lg absolute left-5 top-5">
          <span className="text-white text-center w-10">{`${percentageDiscount}% OFF`}</span>
        </div>
      )}
      {!isImageLoaded && (
        <div className="absolute inset-0">
          <ProductImageSkeleton />
        </div>
      )}
      <img
        src={imageUrl}
        className={`w-full h-full object-cover ${isImageLoaded ? "" : "invisible"}`}
        alt={alt}
        onLoad={() => setIsImageLoaded(true)}
      />
    </div>
  );
};
