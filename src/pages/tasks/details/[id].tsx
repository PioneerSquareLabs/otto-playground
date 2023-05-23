import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Task } from '~/types';
import { Box, Heading, Text, Input, Button, FormControl, FormLabel, Select } from '@chakra-ui/react';

interface Props {
  task: Task;
}

const TaskDetails: React.FC<Props> = ({ task: initialTask }) => {
  const router = useRouter();
  const { id } = router.query;
  const [task, setTask] = useState<Task>(initialTask);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch(`/api/tasks/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch task details');
        }
        const data: Task = await response.json();
        setTask(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTaskDetails();
  }, []);

  const updateTask = async (updatedTask: Partial<Task>) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      const data: Task = await response.json();
      setTask(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    updateTask({ title: newTitle });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDescription = event.target.value;
    updateTask({ description: newDescription });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as Task['status'];
    updateTask({ status: newStatus });
  };

  const handleStoryPointsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStoryPoints = parseInt(event.target.value, 10);
    updateTask({ storyPoints: newStoryPoints });
  };

  return (
    <Box>
      {error && <Text color="red.500">{error}</Text>}
      <Heading>{task.title}</Heading>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input value={task.title} onChange={handleTitleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input value={task.description} onChange={handleDescriptionChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <Select value={task.status} onChange={handleStatusChange}>
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Story Points</FormLabel>
        <Input type="number" value={task.storyPoints} onChange={handleStoryPointsChange} />
      </FormControl>
    </Box>
  );
};

export default TaskDetails;