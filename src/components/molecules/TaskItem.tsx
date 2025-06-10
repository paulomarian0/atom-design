import type { Task } from "@/types/task";
import { Checkbox } from "../atoms/checkbox";
import { Button } from "../atoms/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Input } from "../atoms/input";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onToggle, onEdit, onDelete }: Props) => (
  <div className="flex items-center justify-between gap-2">
    <Checkbox checked={task.completed} onClick={() => onToggle(task.id)} />
    <Input
      value={task.name}
      onChange={(e) => onEdit(task.id, e.target.value)}
      className="flex-1"
      placeholder="Edit task name"
    />
    <Button
      variant="outline"
      size="icon"
      onClick={() => onEdit(task.id, task.name)}
    >
      <PencilIcon className="size-4" />
    </Button>
    <Button variant="destructive" size="icon" onClick={() => onDelete(task.id)}>
      <TrashIcon className="size-4" />
    </Button>
  </div>
);
