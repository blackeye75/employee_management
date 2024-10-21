import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex gap-3 justify-between mt-10 ">
      <div className="rounded-sm h-40 w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-sm h-40 w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-sm h-40 w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-sm h-40 w-[45%] py-6 px-9 bg-indigo-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
