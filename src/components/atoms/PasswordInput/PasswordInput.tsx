import { FloatingLabel } from "flowbite-react";
import { useState, type FC } from "react";

import toggleShowPasswordIcon from "@project/assets/toggle-show-password-icon.svg";
import type { PasswordInputProps } from "./types";

export const PasswordInput: FC<PasswordInputProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative w-full">
      <FloatingLabel
        {...props}
        type={showPassword ? "text" : "password"}
        label="Password"
        variant="outlined"
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <img src={toggleShowPasswordIcon} className="h-4" />
      </button>
    </div>
  );
};
