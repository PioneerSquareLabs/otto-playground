import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Layout from '~/components/Layout';

interface Props {}

const Description: React.FC<Props> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [description, setDescription] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); // Clear the error state before a new submission

    if (!description) {
      setError('Description is required');
      return;
    }

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error('Server error, please try again later');
        } else if (response.status >= 400) {
          throw new Error('Validation error, please check your input');
        } else {
          throw new Error('Network error, please check your connection');
        }
      }

      router.push('/create/setup');
    } catch (error) {
      setError((error as any).message);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Project Description</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description || ''}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Next
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </Layout>
  );
};

export default Description;