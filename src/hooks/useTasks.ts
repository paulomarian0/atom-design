import { useState, useEffect } from "react";
import type { Task } from "../types/task";
import { getTasksFromStorage, saveTasksToStorage } from "../utils/storage";

export function useTasks() {
	const [tasks, setTasks] = useState<Task[]>(() => getTasksFromStorage());

	useEffect(() => {
		saveTasksToStorage(tasks);
	}, [tasks]);

	const addTask = (name: string) => {
		const newTask: Task = {
			id: crypto.randomUUID(),
			name,
			completed: false,
		};
		setTasks((prev) => [...prev, newTask]);
	};

	const toggleTask = (id: string) => {
		console.log(id);
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task,
			),
		);
	};

	const editTask = (id: string, name: string) => {
		setTasks((prev) =>
			prev.map((task) => (task.id === id ? { ...task, name } : task)),
		);
	};

	const deleteTask = (id: string) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	return { tasks, addTask, toggleTask, editTask, deleteTask };
}
