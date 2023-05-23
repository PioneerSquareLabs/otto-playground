import { NextApiRequest, NextApiResponse } from "next";
import { Project, ProjectSchema } from "~/types";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const projects = await prisma.project.findMany();

  const validatedProjects = ProjectSchema.array().parse(projects);

  if (!validatedProjects) {
    res.status(500).json({ message: "Validation Error" });
    return;
  }

  res.status(200).json(validatedProjects);
}