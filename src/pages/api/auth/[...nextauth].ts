import NextAuth, { type User, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github'
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    jwt({ token, user, account, profile }) {
      // Initial sign in
      if (account && user && profile) {
        return {
          provider: account.provider,
          access_token: account.access_token,
          refreshToken: account.refresh_token,
          accessToken: account.id_token,
          user,
          profile,
        };
      }
      // Return previous token if the access token has not expired yet
      return token;
      // Access token has expired, try to update it
    },
    session({ session, token }) {
      session.user = token.user as User;
      return session;
    },
  },
  pages: {
    error: '/error', // Error code passed in query string as ?error=
    signIn: '/account/login',
    signOut: '/',
    newUser: '/profile/settings' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 5
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

export default NextAuth(authOptions);
