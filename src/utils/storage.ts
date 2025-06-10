import type { Task } from "../types/task";

const STORAGE_KEY = "todo-tasks";

export function getTasksFromStorage(): Task[] {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
}

export function saveTasksToStorage(tasks: Task[]) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
