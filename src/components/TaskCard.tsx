import React from 'react';
import { Box, Text, Badge } from '@chakra-ui/react';
import { Task } from '~/types';

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { title, description, status, story_points } = task;

  const statusColors = {
    todo: 'blue',
    in_progress: 'orange',
    done: 'green',
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      bg="white"
      maxW="sm"
      my={4}
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm" mb={2}>
        {description}
      </Text>
      <Badge colorScheme={statusColors[status]} mr={2}>
        {status}
      </Badge>
      <Badge colorScheme="gray" fontSize="0.8em">
        {story_points} SP
      </Badge>
    </Box>
  );
};

export default TaskCard;