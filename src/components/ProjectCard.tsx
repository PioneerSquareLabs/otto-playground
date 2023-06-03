import React from 'react';
import { Project } from '~/types';
import '~/styles/globals.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, name, description } = project;

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
      <a href={`/project/${id}`} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;