import z from "zod";

export const loginFormSchema = z.object({
  username: z
    .string({ error: "Username is required" })
    .min(1, "Username is required"),
  password: z
    .string({ error: "Password is required" })
    .min(1, "Password is required"),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export type LoginFormProps = {
  /** Called once the credentials are accepted and the token is stored. */
  onSuccess?: () => void;
};
