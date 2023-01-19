import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const blogRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.blog.findMany({
            include: { author: true }
        })
    }),
    getOne: publicProcedure
        .input(
            z.object({
                id: z.string()
            })
        )
        .
        query(async ({ ctx, input }) => {
            const blog = await ctx.prisma.blog.findUnique({
                where: {
                    id: input.id
                },
                include:{author:true}
            })
            return blog
        }),
    add: protectedProcedure
        .input(
            z.object({
                title: z.string().min(1),
                desc: z.string().min(5),
                author: z.object({
                    id: z.string()
                }),
                createdAt: z.date(),
                category: z.string()
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const blog = await ctx.prisma.blog.create({
                data: {
                    ...input,
                    author: {
                        connect: input.author
                    }
                },
            });
            return blog;
        }),

});
