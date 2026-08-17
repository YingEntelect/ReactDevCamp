import type { FC } from "react";

import { ProductImageSkeleton } from "@project/components";

export const ProductTileSkeleton: FC = () => (
  <div
    className="w-72 p-3 rounded-lg flex flex-col border-2 border-[#C7C7CC] items-start shrink-0 snap-start space-y-1"
    aria-hidden
  >
    <div className="w-full items-center justify-center flex flex-row">
      <div className="h-32 w-full rounded-lg overflow-hidden">
        <ProductImageSkeleton />
      </div>
    </div>
    <div className="h-7 w-64 bg-slate-200 animate-pulse rounded-lg" />
    <div className="h-6 w-36 bg-slate-200 animate-pulse rounded-lg" />
  </div>
);
