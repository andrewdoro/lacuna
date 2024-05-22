import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const skillRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.project.findMany({
      with: {
        skills: {
          with: {
            skill: true,
          },
        },
      },
    });
  }),
} satisfies TRPCRouterRecord;
