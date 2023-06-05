import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { Sitemap, SitemapSchema } from "~/types";

const getSitemapItems = async (projectId: string) => {
  const sitemapItems = await prisma.sitemap.findMany({
    where: { projectId },
  });
  const validatedSitemapItems = SitemapSchema.array().parse(sitemapItems);
  return validatedSitemapItems;
};

const createSitemapItem = async (input: Partial<Sitemap>) => {
  const newSitemapItem = SitemapSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  }).parse(input);
  const createdSitemapItem = await prisma.sitemap.create({
    data: newSitemapItem,
  });
  const validatedSitemapItem = SitemapSchema.parse(createdSitemapItem);
  return validatedSitemapItem;
};

const updateSitemapItem = async (input: Partial<Sitemap>) => {
  const updatedSitemapItem = SitemapSchema.omit({
    createdAt: true,
    updatedAt: true,
  }).parse(input);
  const result = await prisma.sitemap.update({
    where: { id: updatedSitemapItem.id },
    data: updatedSitemapItem,
  });
  const validatedSitemapItem = SitemapSchema.parse(result);
  return validatedSitemapItem;
};

const deleteSitemapItem = async (id: string) => {
  await prisma.sitemap.delete({ where: { id } });
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const session = await getServerAuthSession({ req, res });

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    if (req.method === "GET") {
      const { projectId } = req.query;
      if (!projectId || typeof projectId !== "string") {
        res.status(400).json({ error: "Bad Request" });
        return;
      }
      const sitemapItems = await getSitemapItems(projectId);
      res.status(200).json(sitemapItems);
    } else if (req.method === "POST") {
      const sitemapItem = await createSitemapItem(req.body);
      res.status(201).json(sitemapItem);
    } else if (req.method === "PUT") {
      const updatedSitemapItem = await updateSitemapItem(req.body);
      res.status(200).json(updatedSitemapItem);
    } else if (req.method === "DELETE") {
      const { id } = req.query;
      if (!id || typeof id !== "string") {
        res.status(400).json({ error: "Bad Request" });
        return;
      }
      await deleteSitemapItem(id);
      res.status(200).json({ message: "Sitemap item deleted successfully" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
