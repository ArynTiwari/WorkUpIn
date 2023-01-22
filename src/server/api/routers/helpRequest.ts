import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const helpRequestRouter = createTRPCRouter({
    createHelpRequest: publicProcedure.mutation(async ({ ctx }) => {
        const helpRequest = await ctx.prisma.chat.create({
            data: {},
        });
        return helpRequest;
    }),
    deleteHelpRequest: publicProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.chat.delete({
                where: {
                    id: input.id,
                },
            });
        }),
    getHelpRequests: publicProcedure.query(async ({ ctx }) => {
        const helpRequests = await ctx.prisma.chat.findMany();
        return helpRequests;
    }),
});
