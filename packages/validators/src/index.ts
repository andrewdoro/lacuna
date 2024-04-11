import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const CreateDomainSchema = z.object({
  name: z.string(),
});

export const CreateSkillSchema = z.object({
  name: z.string(),
  domainId: z.number(),
});
