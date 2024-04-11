import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { domain } from "./domain";

export const skill = sqliteTable("skill", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").unique(),
  domainId: integer("domainId").references(() => domain.id),
});
