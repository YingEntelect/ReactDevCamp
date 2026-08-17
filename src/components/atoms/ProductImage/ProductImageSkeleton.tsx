import type { FC } from "react";

export const ProductImageSkeleton: FC = () => (
  <div className="w-full h-full relative bg-slate-200 flex items-center justify-center animate-pulse" />
);
