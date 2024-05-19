import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const skill = sqliteTable("skill", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").unique(),
  description: text("description"),
  skillId: integer("skill_id").references((): AnySQLiteColumn => skill.id),
});

export const skillRelations = relations(skill, ({ many, one }) => ({
  skills: many(skill),
  skill: one(skill, {
    fields: [skill.skillId],
    references: [skill.id],
  }),
}));
