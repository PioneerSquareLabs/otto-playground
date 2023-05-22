_
import React from 'react';
import { Project } from '~/types';
import { useApi } from '~/hooks/useApi';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { data: owner, error: ownerError } = useApi(`/api/projects/${project.id}/owner`);

  if (ownerError) {
    return <div>Error: {ownerError.message}</div>;
  }

  const handleClick = () => {
    // Navigate to project details page
  };

  return (
    <Card onClick={handleClick}>
      <CardHeader>{project.name}</CardHeader>
      <CardBody>
        <p>{project.description}</p>
        <p>Created on: {new Date(project.createdAt).toLocaleDateString()}</p>
      </CardBody>
      {owner && (
        <CardFooter>
          <p>Owner: {owner.name}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;