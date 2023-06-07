import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { Project, ProjectSitemap, ProjectDataSchema, ProjectTask } from '~/types';

interface Props {
  project: Project;
  sitemap: ProjectSitemap[];
  dataSchema: ProjectDataSchema[];
  tasks: ProjectTask[];
}

const ProjectPage: React.FC<Props> = ({ project, sitemap, dataSchema, tasks }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession();
  const [projectDetails, setProjectDetails] = useState<Project | null>(null);
  const [projectSitemap, setProjectSitemap] = useState<ProjectSitemap[]>([]);
  const [projectDataSchema, setProjectDataSchema] = useState<ProjectDataSchema[]>([]);
  const [projectTasks, setProjectTasks] = useState<ProjectTask[]>([]);

  useEffect(() => {
    if (status === 'authenticated' && !session) {
      router.push('/login');
    }
  }, [status, session, router]);

  useEffect(() => {
    if (id) {
      // Fetch project details, sitemap, data schema, and tasks using the provided API endpoints and the `id` parameter.
      // Store the fetched data in the component state using the `useState` hook.
    }
  }, [id]);

  const handleApprove = (item: ProjectSitemap | ProjectDataSchema | ProjectTask) => {
    // Update the corresponding item's `approved` property and send the updated data to the API endpoint to save the changes.
  };

  const handleReject = (item: ProjectSitemap | ProjectDataSchema | ProjectTask) => {
    // Update the corresponding item's `approved` property and send the updated data to the API endpoint to save the changes.
  };

  return (
    <div className="container mx-auto px-4">
      {projectDetails && (
        <div>
          <h1 className="text-2xl font-bold">{projectDetails.name}</h1>
          <p className="text-gray-600">{projectDetails.description}</p>
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold mt-8">Sitemap</h2>
        {projectSitemap.map((item) => (
          <div key={item.id} className="flex items-center justify-between mt-4">
            <div>
              <p>{item.fileName}</p>
              <p className="text-gray-600">{item.fileDescription}</p>
            </div>
            <div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleApprove(item)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleReject(item)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mt-8">Data Schema</h2>
        {projectDataSchema.map((item) => (
          <div key={item.id} className="flex items-center justify-between mt-4">
            <div>
              <p>{item.tableName}</p>
            </div>
            <div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleApprove(item)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleReject(item)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mt-8">Tasks</h2>
        {projectTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between mt-4">
            <div>
              <p>{task.taskName}</p>
              <p className="text-gray-600">{task.taskDescription}</p>
            </div>
            <div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleApprove(task)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleReject(task)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;