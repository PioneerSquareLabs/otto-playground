import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { ProjectTask, projectTaskSchema } from "~/types";
import { User } from "next-auth";

const getTask = async (id: string) => {
  const task = await prisma.projectTask.findUnique({
    where: { id },
  });

  const validatedTask = projectTaskSchema.parse(task);
  return validatedTask;
};

const updateTask = async (id: string, input: Partial<ProjectTask>) => {
  const updatedTaskInput = projectTaskSchema
    .omit({
      id: true,
      createdAt: true,
      updatedAt: true,
    })
    .parse(input);

  const updatedTask = await prisma.projectTask.update({
    where: { id },
    data: updatedTaskInput,
  });

  const validatedTask = projectTaskSchema.parse(updatedTask);
  return validatedTask;
};

const deleteTask = async (id: string) => {
  await prisma.projectTask.delete({ where: { id } });
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getServerAuthSession({ req, res });
  const user = session?.user;
  const taskId = req.query.id as string;

  if (!session || !user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    if (req.method === "GET") {
      const task = await getTask(taskId);
      res.status(200).json(task);
    } else if (req.method === "PUT") {
      const updatedTask = await updateTask(taskId, req.body);
      res.status(200).json(updatedTask);
    } else if (req.method === "DELETE") {
      const deletedTask = await deleteTask(taskId);
      res.status(200).json(deletedTask);
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      error.message === "Unauthorized"
    ) {
      res.status(401).json({ error: "Unauthorized" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export default handler;
