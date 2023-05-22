_
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '~/server/db';
import { TeamMemberSchema, TeamMember } from '~/types';

type ApiResponse = TeamMember[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const teamMembers = await prisma.teamMember.findMany();
    const validatedTeamMembers: TeamMember[] = teamMembers.map((teamMember) =>
      TeamMemberSchema.parse(teamMember)
    );

    res.status(200).json(validatedTeamMembers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching team members.' });
  }
}