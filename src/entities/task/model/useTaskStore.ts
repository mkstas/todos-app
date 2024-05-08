import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { ITask } from '@/shared/api';
import { useLocalStorage } from '@/shared/utils';

export const useTaskStore = defineStore('tasks', () => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const tasks: Ref<ITask[]> = ref([]);

  const getTasks = (groupId: string) => {
    if (getLocalStorage('tasks')) {
      const savedTasks: ITask[] = getLocalStorage('tasks');
      const filteredTasks = savedTasks.filter(task => task.groupId === groupId);

      tasks.value = filteredTasks;
    } else {
      setLocalStorage('tasks', []);
    }
  };

  const storeTask = (groupId: string, text: string, status: boolean = false) => {
    const task: ITask = { id: Date.now().toString(), groupId, text, status };
    const savedTasks: ITask[] = getLocalStorage('tasks');

    tasks.value.push(task);
    savedTasks.push(task);

    setLocalStorage('tasks', savedTasks);
  };

  const updateTask = (id: string, ...values: Array<object>) => {
    const savedTasks: ITask[] = getLocalStorage('tasks');

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

    setLocalStorage('tasks', savedTasks);
  };

  const deleteTask = (id: string) => {
    const savedTasks: ITask[] = getLocalStorage('tasks');
    const updatedTasks = savedTasks.filter(task => task.id !== id);

    tasks.value = tasks.value.filter(task => task.id !== id);

    setLocalStorage('tasks', updatedTasks);
  };

  return { tasks, getTasks, storeTask, updateTask, deleteTask };
});
