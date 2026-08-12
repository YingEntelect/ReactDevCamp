import type { FC } from "react";

export const ShoppingFooter: FC = () => (
  <div className="w-full h-16 border-t-2 border-t-[#D9D9D9] flex justify-between items-center px-12 absolute bottom-0 bg-white">
    <div className="flex flex-col h-11 -space-y-2 justify-center">
      <span className="text-lg font-bold">R350</span>
      <span className="text-[#8E8E93]">per month</span>
    </div>
    <button className="w-44 h-11 bg-linear-to-r from-blue-600 to-cyan-400 justify-center items-center flex rounded-full">
      <span className="text-white font-medium">Add to cart</span>
    </button>
  </div>
);
