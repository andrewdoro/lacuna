import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const post = sqliteTable("post", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  title: text("name", { length: 256 }).notNull(),
  content: text("content", { length: 256 }).notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp" }).$onUpdate(
    () => new Date(),
  ),
});
