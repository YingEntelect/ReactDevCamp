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

  const { handleSubmit, handleChange, isValid, errors, touched, handleBlur } =
    useFormik<LoginFormValues>({
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
      noValidate
    >
      <div className="w-full">
        <FloatingLabel
          type="text"
          label="Username"
          name="username"
          variant="outlined"
          autoComplete="username"
          required
          aria-required="true"
          onChange={handleChange}
          onBlur={handleBlur}
          color={
            touched.username && errors.username !== undefined
              ? "error"
              : "default"
          }
          aria-invalid={touched.username && errors.username !== undefined}
          aria-describedby={
            touched.username && errors.username ? "username-error" : undefined
          }
        />
        {touched.username && errors.username && (
          <p
            id="username-error"
            role="alert"
            className="mt-1 text-sm text-red-500"
          >
            {errors.username}
          </p>
        )}
      </div>
      <div className="w-full">
        <PasswordInput
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          autoComplete="current-password"
          required
          aria-required="true"
          color={
            touched.password && errors.password !== undefined
              ? "error"
              : "default"
          }
          aria-invalid={touched.password && errors.password !== undefined}
          aria-describedby={
            touched.password && errors.password ? "password-error" : undefined
          }
        />
        {touched.password && errors.password && (
          <p
            id="password-error"
            role="alert"
            className="mt-1 text-sm text-red-500"
          >
            {errors.password}
          </p>
        )}
      </div>
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
