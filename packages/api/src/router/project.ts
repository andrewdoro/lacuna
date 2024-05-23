import type { TRPCRouterRecord } from "@trpc/server";

import { schema } from "@acme/db/schema";
import { CreateProjectSchema } from "@acme/validators";

import { protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = {
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
  create: protectedProcedure
    .input(CreateProjectSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.project).values(input);
    }),
} satisfies TRPCRouterRecord;
