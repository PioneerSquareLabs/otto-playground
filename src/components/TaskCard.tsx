_
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Task } from '~/types';

interface Props {
  task: Task;
  onTaskClick: (taskId: number) => void;
}

const TaskCard: React.FC<Props> = ({ task, onTaskClick }) => {
  const handleClick = () => {
    onTaskClick(task.id);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? description.substring(0, maxLength) + '...'
      : description;
  };

  return (
    <Box
      onClick={handleClick}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      cursor="pointer"
      _hover={{ bg: 'gray.100' }}
    >
      <Text fontWeight="bold" fontSize="xl">
        {task.title}
      </Text>
      <Text mt={2} fontSize="sm" color="gray.500">
        {truncateDescription(task.description, 100)}
      </Text>
      <Text mt={2} fontSize="sm">
        Status: {task.status}
      </Text>
      <Text mt={2} fontSize="sm">
        Assignee: {task.assignee || 'Unassigned'}
      </Text>
    </Box>
  );
};

export default TaskCard;