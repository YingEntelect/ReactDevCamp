import { useState, type FC } from "react";

import { ProductTile, ProductTileSkeleton } from "@project/components";

import type { ExpandableProductCarouselProps } from "./types";

const numberOfSkeletonTiles = 2;

export const ExpandableProductCarousel: FC<ExpandableProductCarouselProps> = ({
  products,
  loading = false,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const renderLoadingComponent = () =>
    Array.from({ length: numberOfSkeletonTiles }, (_, index) => (
      <ProductTileSkeleton key={index} />
    ));

  const renderContent = () =>
    products?.map((product) => (
      <ProductTile product={product} key={product.id} />
    ));

  return (
    <div className="flex flex-col w-full ">
      <div className="px-5 py-2 flex flex-row justify-between">
        <h2 className="text-lg font-bold">Recommended for you</h2>
        {loading ? (
          <div className="w-20 bg-slate-200 animate-pulse rounded-lg" />
        ) : (
          <button className="cursor-pointer" onClick={toggleExpanded}>
            <p className="font-bold text-blue-500">{`View ${expanded ? "less" : "all"}`}</p>
          </button>
        )}
      </div>
      <div
        className={
          expanded && !loading
            ? "flex flex-row flex-wrap px-5 gap-3 overflow-y-auto"
            : "flex flex-row px-5 space-x-3 overflow-x-auto pb-4"
        }
      >
        {loading ? renderLoadingComponent() : renderContent()}
      </div>
    </div>
  );
};
