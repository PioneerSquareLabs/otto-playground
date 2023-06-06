import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { z } from "zod";
import { Project } from "~/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });

  if (!session?.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const projects = await prisma.project.findMany({
    where: { userId: session.user.id },
  });

  const projectSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string(),
    description: z.string().nullable(),
    userId: z.string(),
  });

  const projectsSchema = z.array(projectSchema);
  const validProjects = projectsSchema.safeParse(projects);

  if (!validProjects.success) {
    res.status(500).json({ error: "Failed to validate projects data" });
    return;
  }

  res.status(200).json(validProjects.data);
};

export default handler;