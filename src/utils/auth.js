import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProdivder from 'next-auth/providers/google';
import prisma from './connect';
import { getServerSession } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',

  providers: [
    GoogleProdivder({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Your Name' },
        password: { label: 'Password', type: 'password', placeholder: 'Your Password' },
        email: { label: 'Email', type: 'email', placeholder: 'Your email' },
      },
      async authorize(credentials) {
        // check to see if email and password is valid
        if (!credentials.email || !credentials.password) {
          return null;
        }
        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          return null;
        }
        // check to see if passwords match
        const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword);
        if (!passwordsMatch) {
          return null;
        }
        // return user object if everything is valid
        return user;
      },
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
