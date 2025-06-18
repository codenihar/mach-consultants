import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { TSignInSchema } from "@/lib/validations";

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
          name: "codedale",
          image: "",
          email: process.env.EMAIL,
          password: process.env.PASSWORD,
        };

        const isMatch = user.password === password;

        if (email !== user.email || !isMatch) return null;
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.image = token.image as string;

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,
});
