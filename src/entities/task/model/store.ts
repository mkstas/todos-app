import { defineStore } from 'pinia';

import { TaskType } from '@/shared/typicode';

export const useTaskStore = defineStore('task', () => {
  const taskList: TaskType[] = [];

  const getTasks = async () => {};

  const createTask = async () => {};

  const updateTask = async () => {};

  const deleteTask = async () => {};

  return {
    taskList,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  };
});
