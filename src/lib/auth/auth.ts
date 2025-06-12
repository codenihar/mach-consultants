import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { TSignInSchema } from "../db/zodSchema";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as TSignInSchema;
        const user = {
          id: "admin",
          email: process.env.EMAIL,
          password: process.env.PASSWORD,
        };

        const isMatch = user.password === password;

        if (email === user.email && isMatch) {
          return { id: user.id, email: user.email };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});
