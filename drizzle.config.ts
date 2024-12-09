// import { type Config } from "drizzle-kit";

// import { env } from "@/env";

// export default {
//   schema: "./src/server/db/schema.ts",
//   dialect: "sqlite",
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
//   tablesFilter: ["game_*"],
// } satisfies Config;


//move to posgres supabase
import type { Config } from "drizzle-kit";
import { env } from "./src/lib/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["game_*"],
} satisfies Config;

