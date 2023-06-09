import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Project } from '~/types';

interface Props {}

const NamePage: React.FC<Props> = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProject: Project = {
      id: '',
      name: projectName,
      createdAt: new Date(),
      updatedAt: new Date(),
      description: '',
      userId: session?.user.id || '',
      githubRepoUrl: null,
      slackChannelId: null,
    };

    // Call the API endpoint to create a new project in the database
    // If the API call is successful, navigate to the next step in the project creation process
    // If there is an error, display an error message to the user
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-extrabold text-gray-900">Create a New Project</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          disabled={!projectName}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default NamePage;