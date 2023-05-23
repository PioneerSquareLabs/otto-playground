import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';
import { UserSchema } from '~/types';
import { z } from 'zod';

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        const isValidUser = UserSchema.safeParse(user);

        if (!isValidUser.success) {
          return null;
        }

        const isPasswordCorrect = isValidUser.data.password === credentials.password;

        if (!isPasswordCorrect) {
          return null;
        }

        return isValidUser.data;
      },
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;
      session.user.email = user.email;
      return session;
    },
    jwt: async (token, user) => {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);