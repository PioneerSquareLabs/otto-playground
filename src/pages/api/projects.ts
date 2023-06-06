import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { User, Project, projectSchema } from "~/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  switch (req.method) {
    case "GET":
      const projects = await prisma.project.findMany({
        where: { userId: session.user.id },
      });
      const validatedProjects = projects.map((project) => projectSchema.parse(project));
      res.status(200).json(validatedProjects);
      break;
    case "POST":
      const createProjectSchema = z.object({
        name: z.string(),
        description: z.string(),
      });

      const { name, description } = createProjectSchema.parse(req.body);

      const newProject = await prisma.project.create({
        data: {
          name,
          description,
          userId: session.user.id,
        },
      });

      const validatedProject = projectSchema.parse(newProject);
      res.status(201).json(validatedProject);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;