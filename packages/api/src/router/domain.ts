import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { desc, eq, schema } from "@acme/db";
import { CreatePostSchema } from "@acme/validators";

import { protectedProcedure, publicProcedure } from "../trpc";

export const domainRouter = {
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return ctx.db.query.domain.findMany({
      orderBy: desc(schema.post.id),
      limit: 10,
    });
  }),
  requests: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.domainRequest.findMany({
      where: (table, { eq }) => eq(table.status, "pending"),
      with: {
        domain: true,
      },
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return ctx.db.query.post.findFirst({
        where: eq(schema.post.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(schema.post).values(input);
    }),

  delete: protectedProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return ctx.db.delete(schema.post).where(eq(schema.post.id, input));
  }),
} satisfies TRPCRouterRecord;
