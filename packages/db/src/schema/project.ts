import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { domain } from "./domain";
import { skill } from "./skill";

export const project = sqliteTable("project", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  title: text("title"),
  slug: text("slug"),
  description: text("description"),
});

export const projectSkills = sqliteTable("projectSkill", {
  projectId: integer("projectId").references(() => project.id),
  skillId: integer("skillId").references(() => skill.id),
  ratio: integer("ratio"),
});

export const projectDomains = sqliteTable("projectDomain", {
  projectId: integer("projectId").references(() => project.id),
  domainId: integer("domainId").references(() => domain.id),
});