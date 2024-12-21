import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

export const AuthConfig = {
  providers: [Google, Facebook],
};
