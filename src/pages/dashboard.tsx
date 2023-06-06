import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Project } from "../types";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      setLoading(true);
      fetch("/api/projects", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user.email}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
          setLoading(false);
        });
    }
  }, [status, session]);

  const handleCreateProject = () => {
    router.push("/project/create");
  };

  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4">Your Projects</h1>
          <ul className="mb-4">
            {projects.map((project) => (
              <li key={project.id} className="mb-2">
                <a
                  href={`/project/${project.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreateProject}
          >
            Create Project
          </button>
        </>
      )}
    </Layout>
  );
};

export default Dashboard;