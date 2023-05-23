import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Layout } from '~/components/Layout';
import { ProjectCard } from '~/components/ProjectCard';
import { fetchProjects } from '~/api/projects';
import { Project } from '~/interfaces/Project';

interface Props {}

const HomePage: React.FC<Props> = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleProjectClick = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <Layout>
      <Box mb={4}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to the Homepage
        </Heading>
        <Button colorScheme="blue" onClick={handleLoginClick}>
          Login
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default HomePage;