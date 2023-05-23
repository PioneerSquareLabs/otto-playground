import { NextApiRequest, NextApiResponse } from 'next';
import { Project } from '~/types';
import { ProjectSchema } from '~/types';
import { db } from '~/server/db';

type ProjectResponse = {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { id } = req.query;

  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ error: 'Invalid ID parameter' });
    return;
  }

  const project = await db.project.findUnique({
    where: { id: parseInt(id as string, 10) },
  });

  if (!project) {
    res.status(404).json({ error: 'Project not found' });
    return;
  }

  try {
    const validatedProject = ProjectSchema.parse(project);
    res.status(200).json(validatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}