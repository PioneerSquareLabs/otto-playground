import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ProjectTask } from "~/types";
import TaskItem from "~/components/TaskItem";

interface Props {
  projectId: string;
}

const Tasks: React.FC<Props> = ({ projectId }) => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<ProjectTask[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}/tasks`);
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError("Failed to fetch tasks. Please try again.");
      }
    };

    if (session) {
      fetchTasks();
    }
  }, [session, projectId]);

  const handleTaskUpdate = async (updatedTask: ProjectTask) => {
    try {
      await fetch(`/api/tasks/${updatedTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    } catch (err) {
      setError("Failed to update task. Please try again.");
    }
  };

  if (!session) {
    return <div className="text-center">Please sign in to view tasks.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-semibold">Project Tasks</h1>
      <h2 className="mb-2 text-2xl font-semibold">Project Name</h2>
      <p className="mb-6">
        This page displays the list of tasks for the selected project. You can
        review, edit, approve, or reject each task.
      </p>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskUpdate={handleTaskUpdate} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
