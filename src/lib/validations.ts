import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});
export type TSignInSchema = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be atleast 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters.",
  }),
});
export type TSignUpSchema = z.infer<typeof signUpSchema>;
