import type { FC } from "react";

import { twMerge } from "flowbite-react/helpers/tailwind-merge";

import { ProductImageSkeleton } from "@project/components";

import type { ProductTileSkeletonProps } from "./types";

export const ProductTileSkeleton: FC<ProductTileSkeletonProps> = ({
  containerClassName,
}) => (
  <div
    className={twMerge(
      "w-72 p-3 rounded-lg flex flex-col border-2 border-[#C7C7CC] cursor-pointer items-start shrink-0 snap-start space-y-1",
      containerClassName,
    )}
    aria-hidden
  >
    <div className="w-full items-center justify-center flex flex-row">
      <div className="h-32 w-full rounded-lg overflow-hidden">
        <ProductImageSkeleton />
      </div>
    </div>
    <div className="h-7 w-full max-w-4/5 bg-gray-300 animate-pulse rounded-lg" />
    <div className="h-6 w-full max-w-3/5 bg-gray-300 animate-pulse rounded-lg" />
  </div>
);
