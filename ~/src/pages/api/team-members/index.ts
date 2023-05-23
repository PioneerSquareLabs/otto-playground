import { NextApiRequest, NextApiResponse } from "next";
import { TeamMember, TeamMemberSchema } from "~/types";
import db from "~/server/db";

type TeamMemberResponse = {
  teamMembers: TeamMember[];
};

async function getTeamMembers(projectId: number): Promise<TeamMember[]> {
  const teamMembers = await db.teamMember.findMany({
    where: { project_id: projectId },
  });

  const validatedTeamMembers = teamMembers.map((teamMember) =>
    TeamMemberSchema.parse(teamMember)
  );

  return validatedTeamMembers;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { projectId } = req.query;

    if (!projectId) {
      return res.status(400).json({ error: "Missing projectId query parameter" });
    }

    try {
      const teamMembers = await getTeamMembers(Number(projectId));
      const response: TeamMemberResponse = { teamMembers };
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching team members" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};