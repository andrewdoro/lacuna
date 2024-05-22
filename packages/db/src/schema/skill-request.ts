import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

import { users } from "./auth";
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

export const skillRequestRelations = relations(
  skillRequest,
  ({ one, many }) => ({
    votes: many(skillRequestVote),
    skill: one(skill, {
      fields: [skillRequest.parentId],
      references: [skill.id],
    }),
  }),
);

export const skillRequestVote = sqliteTable(
  "skill_request_vote",
  {
    skillRequestId: integer("skill_request_id").references(
      () => skillRequest.id,
    ),
    userId: text("user_id").references(() => users.id),
    vote: text("vote", { enum: ["up", "down"] }),
  },
  (vote) => ({
    skillRequestVoteKey: primaryKey({
      columns: [vote.skillRequestId, vote.userId],
    }),
  }),
);

export const skillRequestVoteRelations = relations(
  skillRequestVote,
  ({ one }) => ({
    skillRequest: one(skillRequest, {
      fields: [skillRequestVote.skillRequestId],
      references: [skillRequest.id],
    }),
  }),
);
