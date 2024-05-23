import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const skillRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.skill.findMany({
      with: {
        skill: true,
      },
    });
  }),
} satisfies TRPCRouterRecord;
