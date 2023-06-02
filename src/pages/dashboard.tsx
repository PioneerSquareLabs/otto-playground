import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Project } from '~/types';
import Layout from '~/components/Layout';

interface Props {
  projects: Project[];
}

const Dashboard: React.FC<Props> = ({ projects: initialProjects }) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [session, loading, router]);

  useEffect(() => {
    // Fetch projects from the API and update the state
  }, []);

  return (
    <Layout title="Dashboard">
      <h1>Your Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
      <button onClick={() => router.push('/create-project')}>Create New Project</button>
    </Layout>
  );
};

export default Dashboard;