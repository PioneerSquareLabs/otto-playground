import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { Task, TaskSchema } from "~/types";

const getTasks = async (projectId: string) => {
  const tasks = await prisma.task.findMany({
    where: { projectId },
  });
  const validatedTasks = TaskSchema.array().parse(tasks);
  return validatedTasks;
};

const createTask = async (input: Partial<Task>) => {
  const newTask = TaskSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  }).parse(input);
  const createdTask = await prisma.task.create({
    data: newTask,
  });
  const validatedTask = TaskSchema.parse(createdTask);
  return validatedTask;
};

const updateTask = async (input: Partial<Task>) => {
  const updatedTaskData = TaskSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  }).parse(input);
  const updatedTask = await prisma.task.update({
    where: { id: input.id },
    data: updatedTaskData,
  });
  const validatedTask = TaskSchema.parse(updatedTask);
  return validatedTask;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getServerAuthSession({ req, res });
  const user = session?.user;

  if (!session || !user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    if (req.method === "GET") {
      const projectId = req.query.projectId as string;
      if (!projectId) {
        res.status(400).json({ error: "Bad Request: projectId is required" });
        return;
      }
      const tasks = await getTasks(projectId);
      res.status(200).json(tasks);
    } else if (req.method === "POST") {
      const task = await createTask(req.body);
      res.status(201).json(task);
    } else if (req.method === "PUT") {
      const task = await updateTask(req.body);
      res.status(200).json(task);
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;