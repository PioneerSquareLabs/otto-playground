import React from "react";
import { ProjectTask } from "~/types";

interface Props {
  task: ProjectTask;
  onTaskUpdate: (updatedTask: ProjectTask) => void;
}

const TaskItem: React.FC<Props> = ({ task, onTaskUpdate }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h3 className="mb-2 text-lg font-semibold">{task.taskName}</h3>
      <p className="text-gray-600">{task.taskDescription}</p>
      <div className="mt-4 flex items-center">
        <span
          className={`mr-2 h-4 w-4 rounded-full ${
            task.approved ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
        <span className="text-gray-600">
          {task.approved ? "Approved" : "Not Approved"}
        </span>
      </div>
      <div
        className="mt-4 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onClick={() => onTaskUpdate(task)}
      >
        Update
      </div>
    </div>
  );
};

export default TaskItem;
