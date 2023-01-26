import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.project.findMany({
            include:{
                author:true
            }
        })
    }),
    getOne: protectedProcedure
        .input(
            z.object({
                id: z.string()
            })
        )
        .
        query(async ({ ctx, input }) => {
            const project = await ctx.prisma.project.findUnique({
                where: {
                    id: input.id
                },
                include: {
                    author: true
                }
            })
            return project
        }),
    add: protectedProcedure
        .input(
            z.object({
                title: z.string().min(5, { message: 'Title must be 5 or more characters of length!' }),
                desc: z.string().min(20, { message: 'Decription must be 20 or more characters of length!' }).max(5000, { message: 'Description should be less than 5000 characters of length!' }),
                createdAt: z.date(),
                amount: z.string(),
                level: z.string(),
                category: z.string(),

            }),
        )
        .mutation(async ({ ctx, input }) => {
            console.log("This is the input coming", input)
            try {
                return await ctx.prisma.project.create({
                    data: {
                        title: input.title,
                        desc: input.desc,
                        authorId: ctx.session.user.id,
                        createdAt: input.createdAt,
                        amount: input.amount,
                        level: input.level,
                        category: input.category,
                    }
                });
            } catch (error) {
                throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
            }
        })

});
