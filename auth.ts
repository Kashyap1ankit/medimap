import NextAuth from "next-auth";
import { AuthConfig } from "./lib/config/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...AuthConfig,
  pages: {
    signIn: "/sign-in",
  },
});
