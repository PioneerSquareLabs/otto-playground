import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { ProjectSitemap, projectSitemapSchema } from "~/types";
import { User } from "next-auth";

const getSitemap = async (id: string) => {
  const sitemap = await prisma.projectSitemap.findFirst({
    where: { id },
  });
  const validatedSitemap = projectSitemapSchema.parse(sitemap);
  return validatedSitemap;
};

const updateSitemap = async (id: string, input: Partial<ProjectSitemap>) => {
  const updatedSitemapData = projectSitemapSchema
    .omit({
      id: true,
      projectId: true,
      createdAt: true,
      updatedAt: true,
    })
    .parse(input);
  const updatedSitemap = await prisma.projectSitemap.update({
    where: { id },
    data: updatedSitemapData,
  });
  const validatedSitemap = projectSitemapSchema.parse(updatedSitemap);
  return validatedSitemap;
};

const deleteSitemap = async (id: string, user: User) => {
  await prisma.projectSitemap.delete({
    where: { id },
  });
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getServerAuthSession({ req, res });
  const user = session?.user;

  if (!session || !user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { id } = req.query;

  try {
    if (req.method === "GET") {
      const sitemap = await getSitemap(id as string);
      res.status(200).json(sitemap);
    } else if (req.method === "PUT") {
      const updatedSitemap = await updateSitemap(id as string, req.body);
      res.status(200).json(updatedSitemap);
    } else if (req.method === "DELETE") {
      await deleteSitemap(id as string, user);
      res.status(204).end();
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
