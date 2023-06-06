import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import {
  ProjectDataSchema,
  ProjectDataColumn,
  projectDataSchemaSchema,
  projectDataColumnSchema,
} from "~/types";
import { User } from "next-auth";

const getDataSchemas = async (user: User) => {
  const dataSchemas = await prisma.projectDataSchema.findMany({
    where: { projectId: user.id },
    include: { projectDataColumns: true },
  });
  const validatedDataSchemas = projectDataSchemaSchema
    .array()
    .parse(dataSchemas);
  return validatedDataSchemas;
};

const createDataSchema = async (
  user: User,
  input: Partial<ProjectDataSchema>,
  columns: Partial<ProjectDataColumn>[]
) => {
  const newDataSchema = projectDataSchemaSchema
    .omit({ id: true, createdAt: true, updatedAt: true })
    .parse(input);
  const newColumns = projectDataColumnSchema
    .omit({ id: true, createdAt: true, updatedAt: true })
    .array()
    .parse(columns);

  const createdDataSchema = await prisma.projectDataSchema.create({
    data: {
      ...newDataSchema,
      projectId: user.id,
      projectDataColumns: { create: newColumns },
    },
    include: { projectDataColumns: true },
  });

  const validatedDataSchema = projectDataSchemaSchema.parse(
    createdDataSchema
  );
  return validatedDataSchema;
};

const updateDataSchema = async (
  user: User,
  input: Partial<ProjectDataSchema>,
  columns: Partial<ProjectDataColumn>[]
) => {
  const updatedDataSchema = projectDataSchemaSchema.parse(input);
  const updatedColumns = projectDataColumnSchema.array().parse(columns);

  const dataSchema = await prisma.projectDataSchema.update({
    where: { id: updatedDataSchema.id },
    data: {
      ...updatedDataSchema,
      projectDataColumns: {
        upsert: updatedColumns.map((column) => ({
          where: { id: column.id },
          update: column,
          create: column,
        })),
      },
    },
    include: { projectDataColumns: true },
  });

  const validatedDataSchema = projectDataSchemaSchema.parse(dataSchema);
  return validatedDataSchema;
};

const deleteDataSchema = async (user: User, id: string) => {
  await prisma.projectDataColumn.deleteMany({
    where: { dataSchemaId: id },
  });
  await prisma.projectDataSchema.delete({ where: { id } });
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

  try {
    if (req.method === "GET") {
      const dataSchemas = await getDataSchemas(user);
      res.status(200).json(dataSchemas);
    } else if (req.method === "POST") {
      const { dataSchema, dataColumns } = req.body;
      const createdDataSchema = await createDataSchema(
        user,
        dataSchema,
        dataColumns
      );
      res.status(201).json(createdDataSchema);
    } else if (req.method === "PUT") {
      const { dataSchema, dataColumns } = req.body;
      const updatedDataSchema = await updateDataSchema(
        user,
        dataSchema,
        dataColumns
      );
      res.status(200).json(updatedDataSchema);
    } else if (req.method === "DELETE") {
      const { id } = req.body;
      await deleteDataSchema(user, id);
      res.status(200).json({ message: "Data schema deleted successfully" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;