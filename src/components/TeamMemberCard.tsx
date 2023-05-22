_
import React from 'react';
import { TeamMember } from '~/types';
import { Box, Text, Button } from '@chakra-ui/react';

interface Props {
  teamMember: TeamMember;
  onDelete?: (id: number) => void;
}

const TeamMemberCard: React.FC<Props> = ({ teamMember, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(teamMember.id);
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Text fontSize="xl" fontWeight="bold">
        {teamMember.name}
      </Text>
      <Text fontSize="md" color="gray.500">
        {teamMember.email}
      </Text>
      {onDelete && (
        <Button mt={2} colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </Box>
  );
};

export default TeamMemberCard;