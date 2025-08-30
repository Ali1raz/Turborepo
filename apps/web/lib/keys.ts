import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { keys as auth } from "@workspace/auth/keys";
import { keys as db } from "@workspace/db";

export const env = createEnv({
  extends: [auth, db],
  server: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});
