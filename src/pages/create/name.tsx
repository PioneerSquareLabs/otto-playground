import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Project } from '~/types';

interface Props {}

const NamePage: React.FC<Props> = () => {
  const { data: session } = useSession();
  const [projectName, setProjectName] = useState('');
  const router = useRouter();

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
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">Create a New Project</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="projectName" className="sr-only">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={!projectName}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NamePage;