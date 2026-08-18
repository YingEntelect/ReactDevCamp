import type { FC } from "react";

export const SearchBar: FC = () => (
  <input
    className="w-full h-9 bg-[#E5E5EA] rounded-sm px-5"
    type="text"
    placeholder="Search products..."
  />
);
