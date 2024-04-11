import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const CreateDomainRequestSchema = z.object({
  name: z.string(),
  description: z.string(),
  parentId: z.number().describe("Parent domain").optional(),
});

export const CreateSkillSchema = z.object({
  name: z.string(),
  domainId: z.number(),
});
