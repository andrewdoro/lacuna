import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

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
  vote: protectedProcedure
    .input(
      z.object({
        vote: z.enum(["up", "down"]),
        skillRequestId: z.number(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.skillRequestVote).values({
        vote: input.vote,
        skillRequestId: input.skillRequestId,
        userId: ctx.session.user.id,
      });
    }),
} satisfies TRPCRouterRecord;
