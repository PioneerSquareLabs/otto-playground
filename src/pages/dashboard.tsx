import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Project } from '~/types';
import ProjectCard from '~/components/ProjectCard';

interface DashboardProps {
  initialProjects: Project[];
}

const Dashboard: React.FC<DashboardProps> = ({ initialProjects }) => {
  // State and variables
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const router = useRouter();

  // Fetch projects from API
  useEffect(() => {
    // Fetch projects from API and update state
  }, []);

  // Render project cards
  const renderProjects = () => {
    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ));
  };

  // Handle "Create New Project" button click
  const handleCreateNewProject = () => {
    router.push('/new-project');
  };

  // Render component
  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={handleCreateNewProject}>Create New Project</button>
      <div>{renderProjects()}</div>
    </div>
  );
};

export default Dashboard;