import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { ProjectTask, projectTaskSchema } from "~/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = session.user;

  switch (req.method) {
    case "GET":
      try {
        const projectId = req.query.projectId as string;
        const tasks = await prisma.projectTask.findMany({
          where: { projectId },
        });
        const validatedTasks = projectTaskSchema.array().parse(tasks);
        res.status(200).json(validatedTasks);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    case "POST":
      try {
        const taskData = req.body;
        const validatedTaskData = projectTaskSchema.parse(taskData);
        const createdTask = await prisma.projectTask.create({
          data: { ...validatedTaskData, projectId: taskData.projectId },
        });
        res.status(201).json(createdTask);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    case "PUT":
      try {
        const { taskId, ...taskData } = req.body;
        const validatedTaskData = projectTaskSchema.parse(taskData);
        const updatedTask = await prisma.projectTask.update({
          where: { id: taskId },
          data: validatedTaskData,
        });
        res.status(200).json(updatedTask);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    case "DELETE":
      try {
        const { taskId } = req.body;
        await prisma.projectTask.delete({
          where: { id: taskId },
        });
        res.status(200).json({ message: "Task deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}