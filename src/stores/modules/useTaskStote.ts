import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@/composables';
import { ITask } from '@/types';

export const useTaskStore = defineStore('tasks', () => {
  const { getStorage, setStorage } = useStorage();

  const tasks: Ref<ITask[]> = ref([]);

  const getTasks = (groupId: string) => {
    if (getStorage('tasks')) {
      const savedTasks: ITask[] = getStorage('tasks');
      const filteredTasks = savedTasks.filter(task => task.groupId === groupId);

      tasks.value = filteredTasks;
    } else {
      setStorage('tasks', []);
    }
  };

  const storeTask = (
    groupId: string,
    value: string,
    status: boolean = false,
  ) => {
    const task = { id: Date.now().toString(), groupId, value, status };
    const savedTasks: ITask[] = getStorage('tasks');

    tasks.value.push(task);
    savedTasks.push(task);

    setStorage('tasks', savedTasks);
  };

  const updateTask = (id: string, ...values: Array<object>) => {
    const savedTasks: ITask[] = getStorage('tasks');

    for (let i = 0; i < savedTasks.length; i++) {
      if (savedTasks[i].id === id) {
        Object.assign(savedTasks[i], values[0]);
      }
    }

    for (let i = 0; i < tasks.value.length; i++) {
      if (tasks.value[i].id === id) {
        Object.assign(tasks.value[i], values[0]);
      }
    }

    setStorage('tasks', savedTasks);
  };

  const deleteTask = (id: string) => {
    const savedTasks: ITask[] = getStorage('tasks');
    const updatedTasks = savedTasks.filter(task => task.id !== id);

    tasks.value = tasks.value.filter(task => task.id !== id);

    setStorage('tasks', updatedTasks);
  };

  return {
    tasks,
    getTasks,
    storeTask,
    updateTask,
    deleteTask,
  };
});
