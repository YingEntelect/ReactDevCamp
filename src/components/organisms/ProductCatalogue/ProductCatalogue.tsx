import type { FC } from "react";

import { ProductTile, ProductTileSkeleton } from "@project/components";

import type { ProductCatalogueProps } from "./types";

const numberOfSkeletonTiles = 5;

export const ProductCatalogue: FC<ProductCatalogueProps> = ({
  products,
  loading = false,
}) => {
  const renderLoadingComponent = () =>
    Array.from({ length: numberOfSkeletonTiles }, (_, index) => (
      <ProductTileSkeleton key={index} containerClassName="w-44" />
    ));

  const renderContent = () =>
    products?.map((product) => (
      <ProductTile
        containerClassName="w-44"
        product={product}
        key={product.id}
      />
    ));

  return (
    <div>
      <div className="px-5 py-2">
        <h2 className="text-lg font-bold">Products for you</h2>
      </div>
      <div className="flex flex-row flex-wrap gap-3 px-5">
        {loading ? renderLoadingComponent() : renderContent()}
      </div>
    </div>
  );
};
