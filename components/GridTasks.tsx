import React from "react";
import TaskProgress from "./TaskProgress";
import GridTile from "./GridTile";

function GridTasks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="row-span-2 md:col-span-2 lg:row-auto">
        <GridTile
          title="Task 1"
          className="bg-gradient-to-br from-purple-500 to-pink-500"
        />
      </div>

      <GridTile
        title="Task 2"
        className="bg-gradient-to-br from-cyan-500 to-blue-500"
      />
      <GridTile
        title="Task 3"
        className="bg-gradient-to-br from-blue-500 to-green-500"
      />
    </div>
  );
}

export default GridTasks;
