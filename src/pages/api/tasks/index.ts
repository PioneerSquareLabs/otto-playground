import { NextApiRequest, NextApiResponse } from "next";
import { Task } from "~/types";
import { TaskSchema } from "~/types";
import db from "~/server/db";

type GetTasksResponse = {
  tasks: Task[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<GetTasksResponse | Error>): Promise<void> => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const tasks = await db.task.findMany();

  const result = TaskSchema.array().safeParse(tasks);

  if (!result.success) {
    res.status(500).json({ message: "Error validating tasks data" });
    return;
  }

  res.status(200).json({ tasks: result.data });
};

export default handler;