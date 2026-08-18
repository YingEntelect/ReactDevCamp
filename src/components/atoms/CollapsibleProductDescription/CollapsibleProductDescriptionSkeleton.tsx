import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import type { FC } from "react";

export const CollapsibleProductDescriptionSkeleton: FC = () => (
  <div className="flex flex-col space-y-2">
    <div className={twMerge([skeletonLineBaseClass, "w-full"])} />
    <div className={twMerge([skeletonLineBaseClass, "w-full"])} />
    <div className={twMerge([skeletonLineBaseClass, "w-3/4"])} />
  </div>
);

const skeletonLineBaseClass = "h-4 bg-gray-300 animate-pulse rounded-lg";
