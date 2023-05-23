import { NextApiRequest, NextApiResponse } from "next";
import { Task } from "~/types";
import { TaskSchema } from "~/types";
import db from "~/server/db";

const getTaskById = async (taskId: number): Promise<Task> => {
  const task = await db.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return TaskSchema.parse(task);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const taskId = parseInt(id as string, 10);
      const task = await getTaskById(taskId);
      res.status(200).json(task);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;