import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Project } from '~/types';
import 'tailwindcss/tailwind.css';

interface Props {
  projects: Project[];
}

const Dashboard: React.FC<Props> = ({ projects = [] }) => {
  const [projectList, setProjectList] = useState(projects);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjectList(data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleCreateProjectClick = () => {
    router.push('/create-project');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Your Projects</h1>
      <h2 className="text-2xl mb-6">Manage your projects and track their progress</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        onClick={handleCreateProjectClick}
      >
        Create New Project
      </button>
      {projectList.length > 0 ? (
        <ul>
          {projectList.map((project) => (
            <li key={project.id} className="mb-4">
              <a href={`/projects/${project.id}`} className="text-blue-500 hover:text-blue-700">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no projects. Click the 'Create New Project' button to get started.</p>
      )}
    </div>
  );
};

export default Dashboard;