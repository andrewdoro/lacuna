import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { schema } from "@acme/db/schema";

export const CreateSkillRequestSchema = z.object({
  name: z.string(),
  description: z.string(),
  skillId: z.number().describe("Skill parent").optional(),
});

export const CreateProjectSchema = createInsertSchema(schema.project);
