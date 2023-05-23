import { NextApiRequest, NextApiResponse } from 'next';
import { Document, DocumentSchema } from '~/types';
import { prisma } from '~/server/db';

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const projectId = Number(req.query.projectId);

  if (isNaN(projectId)) {
    res.status(400).json({ error: 'Invalid projectId' });
    return;
  }

  const documents = await prisma.document.findMany({ where: { project_id: projectId } });

  const validatedDocuments = DocumentSchema.array().parse(documents);

  res.status(200).json(validatedDocuments);
}

export default handler;