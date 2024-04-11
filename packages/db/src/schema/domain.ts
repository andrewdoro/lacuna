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

export const domainRequest = sqliteTable("domain_request", {
  id: integer("id").primaryKey({
    autoIncrement: true,
  }),
  name: text("name"),
  status: text("status", { enum: ["pending", "approved", "rejected"] }).default(
    "pending",
  ),
  parentId: integer("parent_id").references((): AnySQLiteColumn => domain.id),

  description: text("description"),
  rejectedReason: text("rejected_reason"),
});

export const domainRequestRelations = relations(domainRequest, ({ one }) => ({
  domain: one(domain, {
    fields: [domainRequest.id],
    references: [domain.id],
  }),
}));

export const domainRelations = relations(domain, ({ many, one }) => ({
  skills: many(skill),
  domain: one(domain, {
    fields: [domain.parentId],
    references: [domain.id],
  }),
}));
