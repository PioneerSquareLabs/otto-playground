import React from 'react';
import { Project } from '~/types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { name, description, createdAt } = project;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 my-4 md:my-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <footer className="text-sm md:text-base text-gray-500">
        Created on {formattedDate}
      </footer>
    </div>
  );
};

export default ProjectCard;