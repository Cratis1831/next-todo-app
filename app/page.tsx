import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import TaskProgress from "@/components/TaskProgress";
import GridTasks from "@/components/GridTasks";

export default function Home() {
  return (
    <main>
      <div className="p-8 text-2xl font-bold">Hi, Ashkan</div>
      <div className="px-8">
        <SearchBar />
      </div>
      <div className="px-8 pt-4">
        <TaskProgress />
      </div>
      <div className="px-8 pt-4">
        <GridTasks />
      </div>
      <div className="px-8 pt-4">
        <p className="font-bold text-xl">Urgent Tasks</p>
      </div>
    </main>
  );
}
