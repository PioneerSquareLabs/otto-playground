import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ProjectDataSchema, ProjectDataColumn } from "~/types";

interface DataPageProps {
  projectId: string;
}

const DataPage: React.FC<DataPageProps> = ({ projectId }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [dataSchemas, setDataSchemas] = useState<ProjectDataSchema[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      // Fetch data schemas from the API and update the state variables
      // Replace the URL with the actual API endpoint
      fetch(`/api/data-schemas?projectId=${projectId}`)
        .then((response) => response.json())
        .then((data) => {
          setDataSchemas(data);
          setLoading(false);
        });
    }
  }, [session, router, projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (dataSchemas.length === 0) {
    return <div>No data schemas available.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <table>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Approved</th>
            <th>Actions</th>
          </tr>
        </thead>
        {dataSchemas.map((schema) => (
          <tr key={schema.id}>
            <td>{schema.tableName}</td>
            <td>
              {schema.approved ? (
                <span className="text-green-500">&#x2714;</span>
              ) : (
                <span className="text-red-500">&#x2718;</span>
              )}
            </td>
            <td>
              <div className="inline-flex rounded-md shadow">
                <button className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Edit
                </button>
                <button className="ml-3 inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
                  Approve
                </button>
                <button className="ml-3 inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
                  Reject
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DataPage;
