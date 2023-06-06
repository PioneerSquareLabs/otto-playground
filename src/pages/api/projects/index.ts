import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { Project } from "~/types";
import { z } from "zod";

const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.instanceof(Date),
  updatedAt: z.instanceof(Date),
  description: z.string().nullable(),
  userId: z.string(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const session = await getServerAuthSession({ req, res });

  if (!session || !session.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const projects = await prisma.project.findMany({
    where: { userId: session.user.id },
  });

  const validatedProjects = z.array(projectSchema).parse(projects);

  res.status(200).json({ projects: validatedProjects });
};

export default handler;