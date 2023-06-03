import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { Project, User } from "~/types";

interface Props {
  user: User;
}

const CreateProject: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [library, setLibrary] = useState("");
  const [database, setDatabase] = useState("");
  const [hosting, setHosting] = useState("");
  const [authFramework, setAuthFramework] = useState("");
  const [cssFramework, setCssFramework] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call API to create a new project
    // Redirect to the project dashboard or the newly created project page
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-2xl font-semibold">Create a New Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-sm font-medium">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectDescription"
              className="block text-sm font-medium"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="language" className="block text-sm font-medium">
              Language
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full"
            >
              {/* Add language options here */}
            </select>
          </div>
          {/* Add more form fields for framework, library, database, hosting, authFramework, and cssFramework */}
          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Create Project
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateProject;
