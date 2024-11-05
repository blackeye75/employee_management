import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form
        action=""
        className=" bg-zinc-900 rounded-sm flex items-center mt-5 justify-end"
      >
        <div className=" w-1/2 space-y-2 py-8 px-3">
          <div>
            <h3 className="">Task Title</h3>
            <input
              className="mt-2 rounded-md w-[80%] bg-transparent outline-none border-[1px]  p-1"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3>Data</h3>
            <input
              className="mt-2 rounded-md w-[80%] bg-transparent outline-none border-[1px]  p-1"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3>Assign To</h3>
            <input
              className="mt-2 rounded-md w-[80%] bg-transparent outline-none border-[1px]  p-1"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              className="mt-2 rounded-md w-[80%] bg-transparent outline-none border-[1px]  p-1"
              type="text"
              placeholder="Task"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-2 py-8 items-end pr-3  flex flex-col ">
          {/* <div className="w-full   flex flex-col" > */}
          <h3 className="text-start w-full pl-36">Description</h3>
          <textarea
            className="mt-2 p-1 w-[80%] rounded-md bg-transparent outline-none border-[1px]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="px-3 py-2 bg-emerald-500 w-[80%] text-center rounded-md">
            Create Task{" "}
          </button>
          {/* </div> */}
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
