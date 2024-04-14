import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProdivder from 'next-auth/providers/google';
import prisma from './connect';
import { getServerSession } from 'next-auth';
import NextAuth from 'next-auth';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProdivder({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });
      token.isAdmin = userInDb?.isAdmin;
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
