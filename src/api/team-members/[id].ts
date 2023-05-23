import { NextApiRequest, NextApiResponse } from "next";
import { TeamMember, TeamMemberSchema } from "~/types";
import { prisma } from "~/server/db";

type GetTeamMemberResponse = {
  teamMember: TeamMember;
};

const getTeamMember = async (id: number): Promise<TeamMember> => {
  const teamMember = await prisma.teamMember.findUnique({
    where: { id },
  });

  if (!teamMember) {
    throw new Error("Team member not found");
  }

  return teamMember;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const teamMemberId = Number(req.query.id);

  try {
    const teamMember = await getTeamMember(teamMemberId);
    const validatedTeamMember = TeamMemberSchema.parse(teamMember);

    res.status(200).json({ teamMember: validatedTeamMember } as GetTeamMemberResponse);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};