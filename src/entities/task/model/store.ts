import { defineStore } from 'pinia';

import { CollectionEnum, TaskType } from '@/shared/typicode';

export const useTasksStore = defineStore(CollectionEnum.tasks, () => {
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
