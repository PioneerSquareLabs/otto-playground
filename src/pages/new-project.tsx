import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Project } from '~/types';
import Layout from '~/components/Layout';

interface Props {}

const NewProject: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (!name || !description) {
      alert('Please enter a project name and description.');
      return;
    }

    try {
      // Call API endpoint to create the new project
      // Assume the API function is called createProject and takes a project object as an argument
      const newProject: Project = { name, description };
      await createProject(newProject);

      // Navigate to the main dashboard page upon successful creation
      router.push('/dashboard');
    } catch (error) {
      // Handle any errors appropriately
      console.error('Error creating new project:', error);
      alert('An error occurred while creating the new project. Please try again.');
    }
  };

  return (
    <Layout>
      <h1>Create a New Project</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default NewProject;