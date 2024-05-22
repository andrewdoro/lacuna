import { relations } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
  unique,
} from "drizzle-orm/sqlite-core";

import { skill } from "./skill";

export const project = sqliteTable("project", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  title: text("title"),
  slug: text("slug"),
  description: text("description"),
});

export const projectSkills = sqliteTable(
  "projectSkill",
  {
    projectId: integer("projectId").references(() => project.id),
    skillId: integer("skillId").references(() => skill.id),
    ratio: integer("ratio"),
  },
  (projectSkill) => ({
    projectSkillsKey: primaryKey({
      columns: [projectSkill.projectId, projectSkill.skillId],
    }),
  }),
);

export const projectSkillRelations = relations(projectSkills, ({ one }) => ({
  skill: one(skill, {
    fields: [projectSkills.skillId],
    references: [skill.id],
  }),
  project: one(project, {
    fields: [projectSkills.projectId],
    references: [project.id],
  }),
}));

export const projectRelations = relations(project, ({ many }) => ({
  skills: many(projectSkills),
}));
