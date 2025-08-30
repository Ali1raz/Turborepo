import { createAuthClient } from "better-auth/react";
import { keys } from "./keys";

export const { signIn, signUp, useSession, signOut } = createAuthClient({
  baseURL: keys.NEXT_PUBLIC_BETTER_AUTH_URL,
});
