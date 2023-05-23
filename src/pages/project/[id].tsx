import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Project, TeamMember } from '~/types';
import { TeamMemberCard } from '~/components/TeamMemberCard';

interface ProjectPageProps {
  project: Project;
  teamMembers: TeamMember[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project, teamMembers }) => {
  const router = useRouter();

  // Fetch project and team member data here using the API endpoints and Prisma

  const handleAddTeamMemberClick = () => {
    router.push(`/project/${project.id}/team-member/new`);
  };

  return (
    <Box>
      <Heading>{project.name}</Heading>
      <Text>{project.description}</Text>
      <Button onClick={handleAddTeamMemberClick}>Add New Team Member</Button>
      {teamMembers.map((teamMember) => (
        <TeamMemberCard key={teamMember.id} teamMember={teamMember} />
      ))}
    </Box>
  );
};

export default ProjectPage;