"use client";
import React from "react";

interface Props {
  className: string;
}

function GridTile({ className }: Props) {
  return (
    <div className="sm:text-sm md:text-lg lg:text-lg flex h-full cursor-pointer hover:scale-105 transition ease-out duration-300">
      <div
        className={`${className} flex flex-row justify-between  w-full outline-none rounded-md py-2 sm:py-4 md:py-4 lg:py-4 pr-3 pl-3 shadow-sm`}
      >
        <div>
          <p className="font-bold text-lg">Task Progress</p>
          <p className="font-bold text-xs ">30/40 Tasks Complete</p>
          <p className="text-xs bg-blue-600 w-20 rounded-xl flex justify-center py-1 my-2 items-center font-bold">
            March 23
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridTile;
