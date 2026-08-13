import type { FC } from "react";

import {
  CollapsibleProductDescriptionSkeleton,
  ProductImageSkeleton,
} from "@project/components";

export const ProductDetailsSkeleton: FC = () => (
  <div className="space-y-5 flex flex-col w-full max-w-250">
    <div className="max-w-96 rounded-lg aspect-364/289 overflow-hidden">
      <ProductImageSkeleton />
    </div>
    <div className="flex flex-col w-full space-y-5">
      <div className="bg-slate-200 animate-pulse rounded-lg h-9 w-1/2" />
      <CollapsibleProductDescriptionSkeleton />
    </div>
  </div>
);
