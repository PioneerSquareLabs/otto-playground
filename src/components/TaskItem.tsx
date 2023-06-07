import React from 'react';
import { ProjectTask } from '~/types';

interface Props {
  task: ProjectTask;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{task.taskName}</h3>
      <p className="text-gray-600">{task.taskDescription}</p>
      <div className="mt-4 flex items-center">
        <span
          className={`w-4 h-4 mr-2 rounded-full ${
            task.approved ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></span>
        <span className="text-gray-600">
          {task.approved ? 'Approved' : 'Not Approved'}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;