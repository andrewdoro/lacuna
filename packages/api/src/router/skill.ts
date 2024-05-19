import type { TRPCRouterRecord } from "@trpc/server";

import { schema } from "@acme/db";

import { protectedProcedure, publicProcedure } from "../trpc";

export const skillRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.skill.findMany({
      with: {
        skill: true,
      },
    });
  }),
} satisfies TRPCRouterRecord;
