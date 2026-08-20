import type { FC } from "react";

import type { ProgressBarProps } from "./types";

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-10">
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
      >
        <div
          className="h-full rounded-full bg-blue-600 transition-[width]"
          style={{ width: `${Math.round(progress)}%` }}
        />
      </div>
      <p className="text-gray-500">Uploading… {Math.round(progress)}%</p>
    </div>
  );
};
