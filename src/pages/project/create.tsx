import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Project } from '~/types';

interface Props {
  onSubmit: (project: Partial<Project>) => void;
}

const CreateProject: React.FC<Props> = ({ onSubmit }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && !session) {
      router.push("/login");
    }
  }, [status, session, router]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Create a New Project</h1>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Project Name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <label htmlFor="description" className="block text-sm font-medium mb-2">
        Project Description
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      >
        Create Project
      </button>
    </form>
  );
};

export default CreateProject;