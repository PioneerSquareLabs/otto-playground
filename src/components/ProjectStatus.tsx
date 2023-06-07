import React from "react";
import { Project } from "~/types";

interface Props {
  project: Project;
}

const ProjectStatus: React.FC<Props> = ({ project }) => {
  const { name, description, createdAt, updatedAt } = project;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Project Status</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-500">Name</h3>
          <p className="text-gray-800">{name}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-500">Description</h3>
          <p className="text-gray-800">{description}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-500">Created At</h3>
          <p className="text-gray-800">{new Date(createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-500">Last Updated</h3>
          <p className="text-gray-800">{new Date(updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;