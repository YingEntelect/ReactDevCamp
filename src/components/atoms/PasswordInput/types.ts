import type { FloatingLabelColor } from "flowbite-react";
import type { ComponentPropsWithRef } from "react";

export type PasswordInputProps = Omit<
  ComponentPropsWithRef<"input">,
  "type" | "color"
> & {
  color?: FloatingLabelColor;
};
