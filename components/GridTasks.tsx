import React from "react";
import TaskProgress from "./TaskProgress";
import GridTile from "./GridTile";

function GridTasks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="row-span-2 md:row-auto">
        <GridTile className="bg-gradient-to-br from-purple-500 to-pink-500" />
      </div>

      <GridTile className="bg-gradient-to-br from-cyan-500 to-blue-500" />
      <GridTile className="bg-gradient-to-br from-blue-500 to-green-500" />
    </div>
  );
}

export default GridTasks;
