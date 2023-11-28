import { defineStore } from 'pinia';

import { TaskType } from '@/shared/typicode';

export const useTasksStore = defineStore('tasks', () => {
  const tasks: TaskType[] = [];

  const getTasks = async () => {};

  const createTask = async () => {};

  const updateTask = async () => {};

  const deleteTask = async () => {};

  return {
    tasks,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  };
});
