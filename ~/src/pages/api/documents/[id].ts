import { NextApiRequest, NextApiResponse } from 'next';
import { Document, DocumentSchema } from '~/types';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import db from '~/server/db';

type DocumentResponse = {
  document: Document;
};

async function getDocumentById(id: number): Promise<Document> {
  const prisma = new PrismaClient();
  const document = await prisma.document.findUnique({ where: { id } });

  if (!document) {
    throw new Error('Document not found');
  }

  const validationResult = DocumentSchema.safeParse(document);

  if (!validationResult.success) {
    throw new Error('Invalid document data');
  }

  return validationResult.data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentResponse | { error: string }>
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const id = Number(req.query.id);

  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid document ID' });
    return;
  }

  try {
    const document = await getDocumentById(id);
    res.status(200).json({ document });
  } catch (error) {
    res.status(404).json({ error: 'Document not found' });
  }
}