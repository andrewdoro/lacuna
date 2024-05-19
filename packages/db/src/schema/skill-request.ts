import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { skill } from "./skill";

export const skillRequest = sqliteTable("skill_request", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  name: text("name"),
  status: text("status", { enum: ["pending", "approved", "rejected"] }).default(
    "pending",
  ),
  parentId: integer("parent_id").references((): AnySQLiteColumn => skill.id),

  description: text("description"),
  rejectedReason: text("rejected_reason"),
});

export const skillRequestRelations = relations(skillRequest, ({ one }) => ({
  skill: one(skill, {
    fields: [skillRequest.parentId],
    references: [skill.id],
  }),
}));
