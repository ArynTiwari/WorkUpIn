import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const chatRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.chat.findMany({
        })
    }),
    add: publicProcedure
        // .input(
        //     z.object({
        //         chat: z.string().min(5, { message: 'Title must be 5 or more characters of length!' }).max(500, { message: 'Not more than 500 characters!' }),
        //     }),
        // )
        .mutation(async ({ ctx }) => {
            try {
                return await ctx.prisma.chat.create({
                    data: {
                    }
                });
            } catch (error) {
                console.log(error)
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
            }
        })

});
