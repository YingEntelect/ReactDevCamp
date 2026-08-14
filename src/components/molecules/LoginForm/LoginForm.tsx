import { Button, FloatingLabel, Toast, ToastToggle } from "flowbite-react";
import { useFormik } from "formik";
import type { FC } from "react";

import { PasswordInput } from "@project/components";
import { useLoginMutation } from "@project/hooks";

import warningCircle from "@project/assets/warning-circle.svg";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { loginFormSchema, type LoginFormValues } from "./types";

export const LoginForm: FC = () => {
  const { mutate: login, error, isPending } = useLoginMutation();

  const { handleSubmit, handleChange, isValid } = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ username, password }) => {
      login({ username, password, rememberMe: false });
    },
    validationSchema: toFormikValidationSchema(loginFormSchema),
  });

  const disabled = !isValid || isPending;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <FloatingLabel
          type="text"
          label="Username"
          name="username"
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <PasswordInput onChange={handleChange} name="password" />
      {error && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-950 opacity-80 border border-red-900">
            <img src={warningCircle} className="h-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{error.message}</div>
          <ToastToggle />
        </Toast>
      )}
      <Button
        type="submit"
        disabled={disabled}
        aria-busy={isPending}
        className={disabled ? "bg-white text-gray-200" : undefined}
      >
        {isPending ? "Logging in…" : "Login"}
      </Button>
    </form>
  );
};
