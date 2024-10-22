import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeDashboard = () => {
  return (
    <div className="p-7 pt-5 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeDashboard;
