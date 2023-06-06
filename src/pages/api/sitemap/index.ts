import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/server/db';
import { getServerAuthSession } from '~/server/auth';
import { SitemapEntry, sitemapEntrySchema } from '~/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const session = await getServerAuthSession({ req, res });

  if (!session?.user) return res.status(401).json({ error: 'Unauthorized' });

  const { projectId } = req.query;

  if (typeof projectId !== 'string') return res.status(400).json({ error: 'Invalid project ID' });

  const sitemapFiles = await prisma.sitemapEntry.findMany({ where: { projectId } });

  const validatedSitemapFiles = sitemapEntrySchema.array().parse(sitemapFiles);

  res.status(200).json(validatedSitemapFiles);
}