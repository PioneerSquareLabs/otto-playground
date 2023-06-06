import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { Task, taskSchema } from "~/types";
import { z } from "zod";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed. Only GET is supported." });
    return;
  }

  const session = await getServerAuthSession({ req, res });
  if (!session) {
    res.status(401).json({ error: "Unauthorized. Please log in to access this resource." });
    return;
  }

  const { projectId } = req.query;
  if (!projectId) {
    res.status(400).json({ error: "Bad Request. Missing required query parameter: projectId." });
    return;
  }

  const tasks = await prisma.task.findMany({ where: { projectId: projectId as string } });

  const result = z.array(taskSchema).safeParse(tasks);
  if (!result.success) {
    res.status(500).json({ error: "Internal Server Error. Failed to validate tasks data." });
    return;
  }

  res.status(200).json(result.data);
};