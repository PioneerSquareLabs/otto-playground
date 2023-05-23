import React from 'react';
import { TeamMember } from '~/types';

interface Props {
  teamMember: TeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ teamMember }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">{teamMember.name}</h3>
      <p className="text-gray-600">{teamMember.email}</p>
    </div>
  );
};

export default TeamMemberCard;