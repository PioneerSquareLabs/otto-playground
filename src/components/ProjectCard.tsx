import React from 'react';
import { Project } from '~/types';
import { Box, Heading, Text } from '@chakra-ui/react';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { id, name, description } = project;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading fontSize="xl">{name}</Heading>
        </Box>
        <Text mt={2} color="gray.500">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;