import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { ProjectSchema } from "~/types";
import { z } from "zod";

type ApiResponse = {
  projects: Array<{
    id: string;
    name: string;
    description: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
  }>;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { userId } = req.query;

  if (!userId || typeof userId !== "string") {
    res.status(400).json({ error: "Invalid or missing userId" });
    return;
  }

  try {
    const projects = await prisma.project.findMany({
      where: { userId },
    });

    const validatedProjects = projects.map((project) =>
      ProjectSchema.parse(project)
    );

    const response: ApiResponse = {
      projects: validatedProjects,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching projects" });
  }
};