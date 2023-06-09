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
      // Call the API endpoint to save the project description to the database
      // If the API call is successful, navigate to the next step in the project creation flow
      router.push('/create/setup');
    } catch (error) {
      // Handle any errors that may occur during the API call and display an appropriate error message to the user
      console.error('Error saving project description:', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Project Description</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Description;