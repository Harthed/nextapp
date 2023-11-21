import Header from "@/components/Header";
import TaskList from "@/components/TaskList";
import { useState } from "react";

interface TaskProps{
  description: string
  status: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <main className="bg-[url('../img/background2.jpg')] bg-cover max-w-full h-screen ">
      <div className="bg-zinc-800/50 bg-cover max-w-full h-screen pt-8">
        <div className=" w-2/5 m-auto opacity-100">
          <Header handleNewTask={() => setTasks} />
          <TaskList />
        </div>
      </div>
    </main>
  );
}
