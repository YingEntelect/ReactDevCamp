import type { FC } from "react";

export const ProductImageSkeleton: FC = () => (
  <div className="w-full h-full relative bg-gray-300 flex items-center justify-center animate-pulse" />
);
