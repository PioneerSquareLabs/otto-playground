import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { ProjectSchema } from "~/types";

const getProjects = async (userId: string) => {
  const projects = await prisma.project.findMany({
    where: { userId: userId },
  });
  const validatedProjects = ProjectSchema.array().parse(projects);
  return validatedProjects;
};

const createProject = async (userId: string, input: Partial<ProjectSchema>) => {
  const newProject = ProjectSchema.omit({
    id: true,
    userId: true,
    createdAt: true,
    updatedAt: true,
  }).parse(input);
  const createdProject = await prisma.project.create({
    data: { ...newProject, userId: userId },
  });
  const validatedProject = ProjectSchema.parse(createdProject);
  return validatedProject;
};

const updateProject = async (
  userId: string,
  id: string,
  input: Partial<ProjectSchema>
) => {
  const updatedProjectData = ProjectSchema.pick({
    name: true,
    description: true,
  }).parse(input);
  const updatedProject = await prisma.project.update({
    where: { id },
    data: { ...updatedProjectData },
  });
  const validatedProject = ProjectSchema.parse(updatedProject);
  return validatedProject;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getServerAuthSession({ req, res });
  const userId = session?.user?.id;

  if (!session || !userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    if (req.method === "GET") {
      const projects = await getProjects(userId);
      res.status(200).json(projects);
    } else if (req.method === "POST") {
      const project = await createProject(userId, req.body);
      res.status(201).json(project);
    } else if (req.method === "PUT") {
      const { id, ...input } = req.body;
      const project = await updateProject(userId, id, input);
      res.status(200).json(project);
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;