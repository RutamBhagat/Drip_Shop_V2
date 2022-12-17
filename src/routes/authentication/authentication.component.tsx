import React from "react";
import { Outlet } from "react-router-dom";


const Authentication = () => {
  return (
    <div className="w-screen bg-gray-900 py-36 ">
      <div className="flex h-full flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex h-[800px] w-full rounded-2xl bg-gray-300 shadow-lg sm:mx-0 sm:w-3/4 md:w-5/6 lg:max-w-5xl">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
