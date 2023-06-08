import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { ProjectSitemap } from '~/types';

interface Props {
  projectSitemaps: ProjectSitemap[];
}

const Sitemap: React.FC<Props> = ({ projectSitemaps }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [sitemaps, setSitemaps] = useState<ProjectSitemap[]>(projectSitemaps || []);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!session) {
      router.push('/login');
    } else {
      fetchSitemaps();
    }
  }, [session]);

  const fetchSitemaps = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/sitemaps');
      const data = await response.json();
      setSitemaps(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const handleApprove = (id: string) => {
    // API call to update the approved status
  };

  const handleReject = (id: string) => {
    // API call to update the approved status
  };

  const handleCreateNewFile = () => {
    // Open modal or separate component for creating a new file
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">Project Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sitemaps.map((sitemap) => (
          <div key={sitemap.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{sitemap.fileName}</h2>
            <p className="text-gray-600 mb-4">{sitemap.fileDescription}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => handleApprove(sitemap.id)}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleReject(sitemap.id)}
            >
              Reject
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleCreateNewFile}
      >
        Create New File
      </button>
    </div>
  );
};

export default Sitemap;