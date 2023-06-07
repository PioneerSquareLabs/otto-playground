import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Layout from '~/components/Layout';

interface Props {}

const Description: React.FC<Props> = () => {
  const { status } = useSession();
  const router = useRouter();
  const [description, setDescription] = useState('');

  if (status === 'unauthenticated') {
    router.push('/login');
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Call the API endpoint to save the project description (replace with the actual API call)
      // await saveProjectDescription(description);

      // Navigate to the next step in the project creation flow
      router.push('/create/setup');
    } catch (error) {
      // Handle any errors that may occur during the API call
      console.error('Error saving project description:', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Project Description</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Description;