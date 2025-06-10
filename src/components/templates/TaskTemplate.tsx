import { useState } from "react";
import { Button } from "../atoms/button";
import { TaskList } from "../organisms/TaskList";
import { useTasks } from "@/hooks/useTasks";
import { Input } from "../atoms/input";

export const TaskTemplate = () => {
  const [taskName, setTaskName] = useState("");
  const { tasks, addTask, toggleTask, editTask, deleteTask } = useTasks();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add new task"
        />
        <Button
          onClick={() => {
            addTask(taskName);
            setTaskName("");
          }}
        >
          Add
        </Button>
      </div>
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  );
};
