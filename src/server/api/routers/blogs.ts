import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const blogRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.blog.findMany({
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
            })
            return blog
        }),
    add: protectedProcedure
        .input(
            z.object({
                title: z.string().min(5, { message: 'Title must be 5 or more characters of length!' }),
                desc: z.string().min(20, { message: 'Decription must be 20 or more characters of length!' }).max(5000, { message: 'Description should be less than 5000 characters of length!' }),
                // authorId: z.string(),
                createdAt: z.date(),
                category: z.string()
            }),
        )
        .mutation(async ({ ctx, input }) => {
            console.log("This is the input coming", input)
            try {
                return await ctx.prisma.blog.create({
                    data: {
                        title: input.title,
                        desc: input.desc,
                        authorId: ctx.session.user.id,
                        createdAt: input.createdAt,
                        category: input.category
                    },
                });
            } catch (error) {
                console.log(error)
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
            }
        })

});
