import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";

interface Props {
  projects: Project[];
}

const IndexPage: React.FC<Props> = ({ projects }) => {
  const { data: session } = useSession();
  const [fetchedProjects, setFetchedProjects] = useState<Project[]>(projects || []);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setFetchedProjects(data.projects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Otto</h1>
      <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fetchedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;