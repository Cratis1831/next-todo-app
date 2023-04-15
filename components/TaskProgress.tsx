"use client";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
function TaskProgress() {
  return (
    <div className="sm:text-sm md:text-lg lg:text-lg flex h-full">
      <div className="flex flex-row justify-between bg-[#232229] w-full outline-none rounded-md py-2 sm:py-4 md:py-4 lg:py-4 pr-3 pl-3 shadow-sm ">
        <div>
          <p className="font-bold text-lg">Task Progress</p>
          <p className="text-sm text-gray-400">30/40 Tasks Complete</p>
          <p className="text-xs bg-blue-600 w-20 rounded-xl flex justify-center py-1 my-2 items-center font-bold">
            March 23
          </p>
        </div>
        <div className="flex items-center justify-center">
          <CircularProgress
            variant="determinate"
            value={70}
            size={50}
            thickness={5}
            className="text-purple-500"
          />
        </div>
      </div>
    </div>
  );
}

export default TaskProgress;
