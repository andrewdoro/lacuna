import { authRouter } from "./router/auth";
import { projectRouter } from "./router/project";
import { skillRouter } from "./router/skill";
import { skillRequestRouter } from "./router/skill-request";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  skill: skillRouter,
  skillRequest: skillRequestRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
