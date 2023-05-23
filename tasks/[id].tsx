import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Task } from '~/types';

interface Props {
  taskId: number;
}

const TaskPage: React.FC<Props> = ({ taskId }) => {
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    async function fetchTask() {
      const response = await fetch(`/api/tasks/${taskId}`);
      const data: Task = await response.json();
      setTask(data);
    }

    fetchTask();
  }, [taskId]);

  return (
    <div>
      <h1>{task?.title}</h1>
      <p>{task?.description}</p>
      <p>Status: {task?.status}</p>
      <p>Story Points: {task?.story_points}</p>
    </div>
  );
};

export default TaskPage;