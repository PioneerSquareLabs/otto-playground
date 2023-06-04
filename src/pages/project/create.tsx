import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { User, Project, ProjectOption, SlackConnection } from '~/types';
import Layout from '~/components/Layout';
import 'tailwindcss/tailwind.css';

interface Props {
  user: User;
}

const CreateProject: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectOptions, setProjectOptions] = useState<ProjectOption>({
    language: '',
    framework: '',
    database: '',
    hosting: '',
    authentication: '',
    css_styling: '',
  });
  const [slackConnections, setSlackConnections] = useState<SlackConnection[]>([]);

  useEffect(() => {
    // Fetch user's Slack connections here...
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form and make API calls to create a new project...
  };

  return (
    <Layout>
      <Head>
        <title>Create a New Project</title>
      </Head>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">Create a New Project</h1>
        <p className="text-gray-600 mb-8">Fill in the details below to create your project.</p>
        <form onSubmit={handleSubmit}>
          {/* Render input fields for project name and description... */}
          {/* Render multi-step form for project options... */}
          {/* Render button for Slack authentication... */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Project
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateProject;