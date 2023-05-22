_
import { NextApiRequest, NextApiResponse } from 'next';
import { Task, TaskSchema } from '~/types';
import { db } from '~/server/db';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const tasks = await db.task.findMany();

  try {
    const validatedTasks = TaskSchema.array().parse(tasks);
    res.status(200).json(validatedTasks);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
    return;
  }
};

export default handler;