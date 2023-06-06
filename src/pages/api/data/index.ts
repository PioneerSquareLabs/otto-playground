import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { getServerAuthSession } from "~/server/auth";
import { DataTable, dataTableSchema } from "~/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res
      .status(405)
      .json({ error: "Method not allowed. Use GET for this endpoint." });
    return;
  }

  const session = await getServerAuthSession({ req, res });

  if (!session || !session.user) {
    res
      .status(401)
      .json({ error: "Unauthorized. Please log in to access this endpoint." });
    return;
  }

  const { projectId } = req.query;

  if (!projectId) {
    res.status(400).json({
      error: "Bad Request. Missing required query parameter 'projectId'.",
    });
    return;
  }

  const dataTables = await prisma.dataTable.findMany({
    where: { projectId: projectId as string },
  });

  const validatedDataTables = dataTables.map((dataTable) =>
    dataTableSchema.parse(dataTable)
  );

  res.status(200).json(validatedDataTables);
};

export default handler;
