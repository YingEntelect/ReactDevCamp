import { Button, FloatingLabel } from "flowbite-react";
import { useFormik } from "formik";
import type { FC } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { ErrorToast, PasswordInput } from "@project/components";
import { useLoginMutation } from "@project/hooks";

import {
  loginFormSchema,
  type LoginFormProps,
  type LoginFormValues,
} from "./types";

export const LoginForm: FC<LoginFormProps> = ({ onSuccess }) => {
  const { mutate: login, error, isPending } = useLoginMutation();

  const { handleSubmit, handleChange, isValid, errors, touched, handleBlur } =
    useFormik<LoginFormValues>({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: ({ username, password }) => {
        login({ username, password, rememberMe: false }, { onSuccess });
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
      {error && <ErrorToast message={error.message} />}
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
