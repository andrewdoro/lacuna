import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { integer, sqliteTable, unique } from "drizzle-orm/sqlite-core";

import { users } from "./auth";
import { skillRequest } from "./skill-request";

export const vote = sqliteTable(
  "vote",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    skillRequestId: integer("skill_requst_id").references(
      (): AnySQLiteColumn => skillRequest.id,
    ),
    userId: integer("skill_id").references((): AnySQLiteColumn => users.id),
  },
  (table) => ({
    voteIdx: unique("vote_idx").on(table.skillRequestId, table.userId),
  }),
);
