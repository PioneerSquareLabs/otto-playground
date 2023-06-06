import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { ProjectSitemap, projectSitemapSchema } from "~/types";
import { User } from "next-auth";

const getSitemaps = async (user: User) => {
  const sitemaps = await prisma.projectSitemap.findMany({
    where: { projectId: user.id },
  });
  const validatedSitemaps = projectSitemapSchema.array().parse(sitemaps);
  return validatedSitemaps;
};

// model ProjectSitemap {
//   id             String    @id @default(cuid()) @map("id")
//   projectId      String    @map("project_id")
//   fileName       String    @map("file_name")
//   fileDescription String?    @map("file_description")
//   figmaUrl       String?   @map("figma_url")
//   approved       Boolean   @default(false) @map("approved")
//   createdAt      DateTime  @default(now()) @map("created_at")
//   updatedAt      DateTime  @default(now()) @map("updated_at")
//   project        Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)
// }

// export const projectSitemapSchema = z.object({
//   id: z.string().default("cuid()"),
//   projectId: z.string(),
//   fileName: z.string(),
//   fileDescription: z.string().nullable().optional(),
//   figmaUrl: z.string().nullable().optional(),
//   approved: z.boolean().default(false),
//   createdAt: z.date().default(() => new Date()),
//   updatedAt: z.date().default(() => new Date()),
// });

const createSitemap = async (user: User, input: Partial<ProjectSitemap>) => {
  let newSitemap = projectSitemapSchema
    .omit({
      id: true,
      createdAt: true,
      updatedAt: true,
    })
    .parse(input);

  const createdSitemap = await prisma.projectSitemap.create({
    data: newSitemap as any,
  });
  const validatedSitemap = projectSitemapSchema.parse(createdSitemap);
  return validatedSitemap;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerAuthSession({ req, res });
  const user = session?.user;

  if (!session || !user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    switch (req.method) {
      case "GET":
        const sitemaps = await getSitemaps(user);
        res.status(200).json(sitemaps);
        break;
      case "POST":
        const sitemap = await createSitemap(user, req.body);
        res.status(201).json(sitemap);
        break;
      default:
        res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
