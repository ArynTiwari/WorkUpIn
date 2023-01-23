import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getOne: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.user.findUnique({
                where: {
                    id: input.id
                }
            });
        }),
    getUserInfo: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.userDetails.findFirst({
                where: {
                    detailId: input.id
                }
            })
        }),

    updateUser: protectedProcedure
        .input(z.object({
            firstName: z.string(),
            lastName: z.string(),
            password: z.string(),
            role: z.enum(['CLIENT', 'TALENT']),
            about: z.string(),
            gender: z.string(),
            zip: z.number(),
            city: z.string(),
            state: z.string()
        }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.userDetails.upsert({
                create: {
                    detailId: ctx.session.user.id,
                    firstName: input.firstName,
                    lastName: input.lastName,
                    password: input.password,
                    role: input.role,
                    about: input.about,
                    gender: input.gender,
                    zip: input.zip,
                    city: input.city,
                    state: input.state
                },

                update: {
                    firstName: input.firstName,
                    lastName: input.lastName,
                    password: input.password,
                    role: input.role,
                    about: input.about,
                    gender: input.gender,
                    zip: input.zip,
                    city: input.city,
                    state: input.state
                },
                where: {
                    id: ctx.session.user.id
                },

            });
        }),
});
