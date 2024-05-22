// import "dotenv/config";

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "./config";
import * as auth from "./schema/auth";
import * as post from "./schema/post";
import * as project from "./schema/project";
import * as skill from "./schema/skill";
import * as skillRequest from "./schema/skill-request";

export * from "drizzle-orm/sql";
export { alias } from "drizzle-orm/sqlite-core";

export const schema = {
  ...auth,
  ...post,
  ...skill,
  ...skillRequest,
  ...project,
};

const client = createClient({
  url: env.TURSO_CONNECTION_URL,
  authToken: env.TURSO_AUTH_TOKEN,
});
export const db = drizzle(client, { schema });
