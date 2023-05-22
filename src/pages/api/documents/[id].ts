_
import { NextApiRequest, NextApiResponse } from 'next';
import { Document, DocumentSchema } from '~/types.ts';
import { db } from '~/server/db.ts';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({
      error: 'Method not allowed. Only GET requests are supported.',
    });
    return;
  }

  const id = Number(req.query.id);

  const document = await db.document.findUnique({ where: { id } });

  if (!document) {
    res.status(404).json({
      error: `Document with ID ${id} not found.`,
    });
    return;
  }

  const validatedDocument = DocumentSchema.parse(document);

  res.status(200).json({
    document: validatedDocument,
  });
}