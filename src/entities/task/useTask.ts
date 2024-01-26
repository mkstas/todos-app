import { Ref, ref } from 'vue';
import { Task } from '@/shared/types';

export const useTask = () => {
  const tasks: Ref<Task[]> = ref([]);

  const getTasks = () => {
    tasks.value = JSON.parse(localStorage.getItem('tasks') as string);
  };

  const storeTask = (task: Task) => {
    tasks.value.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  };

  const updateTask = (id: string, fields: []) => {
    const task = tasks.value.find(task => task.id === id);
    task.text = text;
  };

  const deleteTask = (id: string) => {
    const savedTasks: Task[] = JSON.parse(
      localStorage.getItem('tasks') as string,
    );

    const filteredTasks = savedTasks.filter(task => task.id !== id);

    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };

  return {
    getTasks,
    storeTask,
    updateTask,
    deleteTask,
  };
};
