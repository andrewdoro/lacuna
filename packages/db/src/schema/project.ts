import { relations } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

import { users } from "./auth";
import { skill } from "./skill";

export const project = sqliteTable("project", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  title: text("title"),
  slug: text("slug"),
  description: text("description"),
});

export const projectRoles = sqliteTable(
  "project_role",
  {
    userId: integer("user_id").references(() => skill.id),
    projectId: integer("project_id").references(() => project.id),
    role: text("role", { enum: ["plebe", "senator", "consul"] }),
  },
  (role) => ({
    projectRolesKey: primaryKey({
      columns: [role.userId, role.projectId],
    }),
  }),
);

export const projectRolesRelations = relations(projectRoles, ({ one }) => ({
  project: one(project, {
    fields: [projectRoles.projectId],
    references: [project.id],
  }),
  user: one(users, {
    fields: [projectRoles.userId],
    references: [users.id],
  }),
}));

export const projectSkills = sqliteTable(
  "projectSkill",
  {
    projectId: integer("project_id").references(() => project.id),
    skillId: integer("skill_id").references(() => skill.id),
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
  members: many(projectRoles),
}));
