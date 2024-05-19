import { z } from "zod";

export const CreateSkillRequestSchema = z.object({
  name: z.string(),
  description: z.string(),
  skillId: z.number().describe("Skill parent").optional(),
});
