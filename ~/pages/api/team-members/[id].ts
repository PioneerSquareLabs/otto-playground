_
import { NextApiRequest, NextApiResponse } from "next";
import { TeamMember, TeamMemberSchema } from "~/types";
import { db } from "~/server/db";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const id = parseInt(req.query.id as string);

  if (isNaN(id)) {
    res.status(400).json({ message: "Invalid team member ID" });
    return;
  }

  const teamMember = await db.teamMember.findUnique({ where: { id } });

  if (!teamMember) {
    res.status(404).json({ message: "Team member not found" });
    return;
  }

  const validationResult = TeamMemberSchema.safeParse(teamMember);

  if (!validationResult.success) {
    res.status(500).json({ message: "Invalid team member data" });
    return;
  }

  res.status(200).json({ teamMember: validationResult.data });
};

export default handler;