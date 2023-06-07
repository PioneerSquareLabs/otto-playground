import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import ProjectCard from "~/components/ProjectCard";
import { Project } from "~/types";

const Dashboard: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      fetchProjects();
    }
  }, [session]);

  const fetchProjects = async () => {
    if (session) {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="my-4 text-3xl font-semibold">Your Projects</h1>
        <h2 className="mb-6 text-xl">Manage your projects here</h2>
        <button
          className="mb-6 rounded bg-blue-500 px-4 py-2 font-semibold text-white"
          onClick={() => router.push("/projects/create")}
        >
          Create New Project
        </button>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
