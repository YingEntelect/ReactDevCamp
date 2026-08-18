import type { FC } from "react";

import rightChevron from "@project/assets/right-chevron.svg";

import type { ChevronButtonProps } from "./types";

export const ChevronButton: FC<ChevronButtonProps> = ({ title, subtitle }) => {
  return (
    <button className="bg-[#F2F2F7] flex flex-row justify-between p-3 items-center rounded-md cursor-pointer w-full">
      <div className="flex flex-col">
        <span className="text-left font-bold">{title}</span>
        <span className="text-left font-light text-gray-800">{subtitle}</span>
      </div>
      <img src={rightChevron} className="h-6 w-3 object-cover" />
    </button>
  );
};
