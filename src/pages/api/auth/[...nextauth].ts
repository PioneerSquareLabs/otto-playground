_
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapter from 'next-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';
import { UserSchema } from '~/types';
import { z } from 'zod';
import db from '~/server/db';

const prismaAdapter = Adapter.Prisma.Adapter({ prisma: db });

const options = {
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: prismaAdapter,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null,
  },
  callbacks: {},
};

export default (req, res) => NextAuth(req, res, options);