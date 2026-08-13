import type { FC } from "react";

export const ShoppingFooter: FC = () => (
  <footer className="w-full h-16 shrink-0 border-t-2 border-t-[#D9D9D9] flex justify-between items-center px-5 bg-white">
    <div className="flex flex-col h-11 -space-y-2 justify-center">
      <span className="text-lg font-bold">R350</span>
      <span className="text-[#8E8E93]">per month</span>
    </div>
    <button
      className="w-44 h-11 bg-linear-to-r from-blue-600 to-cyan-400 justify-center items-center flex rounded-full"
      type="button"
    >
      <span className="text-white font-medium">Add to cart</span>
    </button>
  </footer>
);
