import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '~/components/Layout';
import { Project } from '~/types';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  const fetchProjects = async () => {
    const response = await fetch('/api/projects');
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateNewProject = () => {
    router.push('/project/create');
  };

  const handleProjectClick = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <Layout>
      <h1 className="text-4xl mb-6">My Projects</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
        onClick={handleCreateNewProject}
      >
        Create New Project
      </button>
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-md rounded p-6 mb-4 cursor-pointer"
          onClick={() => handleProjectClick(project.id)}
        >
          <h2 className="text-2xl">{project.name}</h2>
        </div>
      ))}
    </Layout>
  );
};

export default Dashboard;