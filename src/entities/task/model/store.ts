import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';

import {
  DocumentSnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  QuerySnapshot,
} from 'firebase/firestore';

import { CollectionEnum, TaskStatusEnum, TaskType } from '@/shared/typicode';
import { firestore } from '@/shared/firebase';

export const useTaskStore = defineStore(CollectionEnum.tasks, () => {
  const tasks: Ref<TaskType[]> = ref([]);

  const getTasks = async (taskGroupId: string) => {
    return await getDocs(
      query(
        collection(firestore, CollectionEnum.tasks),
        where('taskGroupId', '==', taskGroupId),
        where('status', '==', TaskStatusEnum.proccess),
        orderBy('createdAt', 'asc'),
      ),
    );
  };

  const setTasks = (response: QuerySnapshot) => {
    response.forEach(doc => {
      tasks.value.push(doc.data() as TaskType);
    });
  };

  const getAndSetTasks = async (taskGroupId: string) => {
    setTasks(await getTasks(taskGroupId));
  };

  const getTask = async (id: string) => {
    return await getDoc(doc(firestore, CollectionEnum.tasks, id));
  };

  const addTask = (response: DocumentSnapshot) => {
    tasks.value.push(response.data() as TaskType);
  };

  const getAndAddTask = async (id: string) => {
    addTask(await getTask(id));
  };

  const createTask = async (task: TaskType) => {
    return await addDoc(collection(firestore, CollectionEnum.tasks), task);
  };

  const createAndGetTask = async (task: TaskType) => {
    const response = await createTask(task);
    await getAndAddTask(response.id);
  };

  const deleteTask = async () => {};

  const removeTask = () => {};

  const deleteAndRemoveTask = () => {};

  const updateTask = async () => {};

  return {
    tasks,
    getAndSetTasks,
    createAndGetTask,
  };
});
