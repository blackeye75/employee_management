import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-[300]">
        {" "}
        Hello 👋, <br />
        <span className="text-3xl font-semibold text-emerald-500">
          Username
        </span>{" "}
      </h1>
      <button className="bg-emerald-500 text-white px-5 py-2 rounded-sm">
        Logout
      </button>
    </div>
  );
};

export default Header;
