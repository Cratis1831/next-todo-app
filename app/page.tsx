import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import TaskProgress from "@/components/TaskProgress";
import GridTasks from "@/components/GridTasks";

export default function Home() {
  return (
    <div className="flex justify-center w-screen">
      <main className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%]">
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
    </div>
  );
}
