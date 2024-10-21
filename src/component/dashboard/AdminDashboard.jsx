import React from "react";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="p-10 h-screen w-full">
      <Header />
      <div>
        <form action="">
          <h3>Task Title</h3>
          <input type="text" placeholder="Make a UI Design" />
          <h3>Description</h3>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <h3>Date</h3>
          <input type="date" name="" id="" />
          <h3>Assign To</h3>
          <input type="text" placeholder="employee name" />
          <h3>Category</h3>
          <input type="text" placeholder="Task" />
          <button>Create Task </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
