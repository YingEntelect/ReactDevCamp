import type { FC } from "react";
import { Toast, ToastToggle } from "flowbite-react";

import warningCircle from "@project/assets/warning-circle.svg";

import type { ErrorToastProps } from "./types";

export const ErrorToast: FC<ErrorToastProps> = ({ message }) => (
  <Toast>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950 opacity-80 border border-red-900">
      <img src={warningCircle} className="h-5" />
    </div>
    <div className="ml-3 text-sm font-normal">{message}</div>
    <ToastToggle />
  </Toast>
);
