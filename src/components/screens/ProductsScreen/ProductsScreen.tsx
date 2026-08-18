import type { FC } from "react";

import { useProductsQuery } from "@project/hooks";
import {
  SearchBar,
  ExpandableProductCarousel,
  ProductCatalogue,
  ErrorToast,
} from "@project/components";

export const ProductsScreen: FC = () => {
  const { data, error, isFetching } = useProductsQuery();

  return (
    <div className="flex flex-col h-dvh">
      <header className="p-5 flex flex-col items-center justify-center space-y-5">
        <h1>InsureTechGuard</h1>
        <SearchBar />
      </header>
      <main className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center">
        {error && <ErrorToast message={error?.message ?? ""} />}
        <ExpandableProductCarousel products={data ?? []} loading={isFetching} />
        <ProductCatalogue products={data ?? []} loading={isFetching} />
      </main>
    </div>
  );
};
