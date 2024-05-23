// import "dotenv/config";

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "./config";
import { schema } from "./schema";

export * from "drizzle-orm/sql";
export { alias } from "drizzle-orm/sqlite-core";

const client = createClient({
  url: env.TURSO_CONNECTION_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});
export const db = drizzle(client, { schema });
