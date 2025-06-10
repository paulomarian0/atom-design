import { render, screen, fireEvent } from "@testing-library/react";
import { expect, vi } from "vitest";
import type { Task } from "@/types/task";
import { TaskItem } from "./TaskItem";

const mockTask: Task = {
  id: "1",
  name: "Study Atom Design",
  completed: false,
};

describe("TaskItem", () => {
  it("show task name", () => {
    render(
      <TaskItem
        task={mockTask}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    expect(screen.getByPlaceholderText("Edit task name")).toHaveValue(
      mockTask.name
    );
  });

  it("add a new task", () => {
    const handleEdit = vi.fn();
    render(
      <TaskItem
        task={mockTask}
        onToggle={vi.fn()}
        onEdit={handleEdit}
        onDelete={vi.fn()}
      />
    );

    const input = screen.getByPlaceholderText("Edit task name");
    fireEvent.change(input, { target: { value: "Study VueJs" } });

    expect(handleEdit).toHaveBeenCalledWith(mockTask.id, "Study VueJs");
  });

  it("toggle task completion", () => {
    const handleToggle = vi.fn();
    render(
      <TaskItem
        task={mockTask}
        onToggle={handleToggle}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleToggle).toHaveBeenCalledWith(mockTask.id);
  });

  it("delete task", () => {
    const handleDelete = vi.fn();
    render(
      <TaskItem
        task={mockTask}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
        onDelete={handleDelete}
      />
    );

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalledWith(mockTask.id);
  });
});
