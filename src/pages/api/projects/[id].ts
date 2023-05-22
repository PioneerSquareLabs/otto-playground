_
import { NextApiRequest, NextApiResponse } from 'next';
import { Project, ProjectSchema } from '~/types';
import db from '~/server/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const id = parseInt(req.query.id as string, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid project ID' });
    return;
  }

  try {
    const project = await db.project.findUnique({ where: { id } });
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    const validationResult = ProjectSchema.safeParse(project);
    if (!validationResult.success) {
      res.status(500).json({ error: 'Invalid project data' });
      return;
    }

    const validProject: Project = validationResult.data;
    res.status(200).json(validProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}