import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { skill } from "./skill";

export const domain = sqliteTable("domain", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  name: text("name").unique(),
  parentId: integer("parent_id").references((): AnySQLiteColumn => domain.id),
});

export const domainRelations = relations(domain, ({ many }) => ({
  skills: many(skill),
}));
