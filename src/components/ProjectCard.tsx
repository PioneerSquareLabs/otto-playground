import React, { FC } from 'react';
import { Project } from '~/types';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
      <p className="text-gray-600">
        {project.description ? project.description : 'No description provided.'}
      </p>
    </div>
  );
};

export default ProjectCard;