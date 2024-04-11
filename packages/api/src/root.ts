import { authRouter } from "./router/auth";
import { domainRouter } from "./router/domain";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  domain: domainRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
