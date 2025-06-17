import { signInSchema, TSignInSchema } from "@/lib/validations";
import { signIn } from "next-auth/react";

export const login = async (values: TSignInSchema) => {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/signin",
    });

    if (!response || response.error) {
      return {
        success: false,
        error: response?.error || "Unknown error",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unexpected error",
    };
  }
};
