import type { Task } from "../../types/task";
import { TaskItem } from "../molecules/TaskItem";

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList = ({ tasks, onToggle, onEdit, onDelete }: Props) => (
  <div className="space-y-2">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);
