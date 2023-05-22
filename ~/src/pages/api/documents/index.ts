_
import { NextApiRequest, NextApiResponse } from 'next';
import { Document, DocumentSchema } from '~/types';
import { prisma } from '~/server/db';
import { z } from 'zod';

type GetAllDocumentsResponse = {
  documents: Document[];
};

const getAllDocuments = async (): Promise<Document[]> => {
  const documents = await prisma.document.findMany();
  return documents;
};

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const documents = await getAllDocuments();

  const validationResult = z.array(DocumentSchema).safeParse(documents);

  if (!validationResult.success) {
    res.status(500).json({ error: 'Failed to validate documents' });
    return;
  }

  res.status(200).json({ documents: validationResult.data });
};

export default handler;