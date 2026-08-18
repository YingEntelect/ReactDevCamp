import type { FC } from "react";
import { useParams } from "react-router";

import {
  ErrorToast,
  ProductDetails,
  ProductDetailsSkeleton,
  ProductTile,
  ShoppingFooter,
} from "@project/components";
import { useProductQuery, useProductsQuery } from "@project/hooks";

export const ProductDetailsScreen: FC = () => {
  const params = useParams();

  const productId = params.id;

  const {
    data: productInfo,
    error,
    isFetching,
  } = useProductQuery(Number(productId));
  const { data: productCatalogue } = useProductsQuery();

  const renderProductDetails = () => {
    if (isFetching) {
      return <ProductDetailsSkeleton />;
    }

    if (error) {
      return <ErrorToast message={error.message} />;
    }

    if (productInfo) {
      return <ProductDetails product={productInfo} />;
    }
  };

  const renderProductCatalogue = () => {
    if (productCatalogue) {
      {
        return productCatalogue.map((product) => (
          <ProductTile product={product} key={product.id} />
        ));
      }
    }
  };

  return (
    <div className="flex flex-col h-dvh">
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="p-5 flex flex-col space-y-5">
          {renderProductDetails()}
          <hr className="border-[#D9D9D9]" />
          <h2 className="text-xl font-bold">Related product</h2>
          <div className="flex flex-row w-full overflow-x-auto space-x-3 snap-x snap-proximity pb-4">
            {renderProductCatalogue()}
          </div>
        </div>
      </main>
      <ShoppingFooter />
    </div>
  );
};
