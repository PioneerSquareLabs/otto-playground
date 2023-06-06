import React from 'react';
import { Project } from '~/types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { name, description, createdAt } = project;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="border p-4 shadow-md rounded">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-base mt-2">{description}</p>
      <span className="text-sm text-gray-500 mt-4 block">Created on {formattedDate}</span>
    </div>
  );
};

export default ProjectCard;