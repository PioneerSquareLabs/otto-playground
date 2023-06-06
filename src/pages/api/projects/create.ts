import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { Project, projectSchema } from "~/types";
import { z } from "zod";

type CreateProjectInput = {
  name: string;
  description?: string;
};

type CreateProjectOutput = {
  project: Project;
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });

  if (!session?.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const inputResult = z.object({ name: z.string(), description: z.string().optional() }).safeParse(req.body);

  if (!inputResult.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const input = inputResult.data;

  const newProject = await prisma.project.create({
    data: {
      name: input.name,
      description: input.description,
      userId: session.user.id,
    },
  });

  const projectResult = projectSchema.safeParse(newProject);

  if (!projectResult.success) {
    res.status(500).json({ error: "Failed to create project" });
    return;
  }

  const project = projectResult.data;

  res.status(201).json({ project });
};