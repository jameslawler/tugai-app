import type { Config } from "drizzle-kit";

export default {
  schema: "./server/db/better-auth-schema.ts",
  out: "./migrations",
  driver: "d1-http",
  dialect: "sqlite",
} satisfies Config;
