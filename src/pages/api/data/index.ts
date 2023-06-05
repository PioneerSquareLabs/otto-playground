import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { DataSchema, DataSchemaSchema } from "~/types";

const getDataSchemaItems = async (projectId: string) => {
  const dataSchemaItems = await prisma.dataSchema.findMany({
    where: { projectId },
  });
  const validatedDataSchemaItems =
    DataSchemaSchema.array().parse(dataSchemaItems);
  return validatedDataSchemaItems;
};

const createDataSchemaItem = async (input: Partial<DataSchema>) => {
  const data = DataSchemaSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  }).parse(input);
  const createdDataSchemaItem = await prisma.dataSchema.create({
    data,
  });
  return createdDataSchemaItem;
};

const updateDataSchemaItem = async (input: Partial<DataSchema>) => {
  const data = DataSchemaSchema.omit({
    createdAt: true,
    updatedAt: true,
  }).parse(input);

  const updatedDataSchemaItem = await prisma.dataSchema.update({
    where: { id: input.id },
    data,
  });
  return updatedDataSchemaItem;
};

const deleteDataSchemaItem = async (id: string) => {
  await prisma.dataSchema.delete({
    where: { id },
  });
};

const handler = async (
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
      const projectId = req.query.projectId as string;
      const dataSchemaItems = await getDataSchemaItems(projectId);
      res.status(200).json(dataSchemaItems);
    } else if (req.method === "POST") {
      const dataSchemaItem = await createDataSchemaItem(req.body);
      res.status(201).json(dataSchemaItem);
    } else if (req.method === "PUT") {
      const dataSchemaItem = await updateDataSchemaItem(req.body);
      res.status(200).json(dataSchemaItem);
    } else if (req.method === "DELETE") {
      const id = req.body.id as string;
      await deleteDataSchemaItem(id);
      res
        .status(200)
        .json({ message: "Data schema item deleted successfully" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
