import type { TRPCRouterRecord } from "@trpc/server";

import { schema } from "@acme/db";
import { CreateSkillRequestSchema } from "@acme/validators";

import { protectedProcedure, publicProcedure } from "../trpc";

export const skillRequestRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.skillRequest.findMany({
      with: {
        skill: true,
      },
    });
  }),
  create: protectedProcedure
    .input(CreateSkillRequestSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.skillRequest).values(input);
    }),
} satisfies TRPCRouterRecord;
