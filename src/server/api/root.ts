import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { blogRouter } from "./routers/blogs";
import { projectRouter } from "./routers/projects";
import { chatRouter } from "./routers/chat";
import { userRouter } from "./routers/user";
import { helpRequestRouter } from "./routers/helpRequest";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  blogs: blogRouter,
  projects: projectRouter,
  chat: chatRouter,
  user: userRouter,
  helpRequest: helpRequestRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
