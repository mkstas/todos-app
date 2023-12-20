import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';

import {
  QuerySnapshot,
  addDoc,
  getDocs,
  updateDoc,
  collection,
  query,
  where,
  doc,
  orderBy,
} from 'firebase/firestore';

import {
  CollectionEnum,
  TaskGroupStatusEnum,
  TaskGroupType,
} from '@/shared/typicode';

import { auth, firestore } from '@/shared/firebase';

export const useTasksGroupStore = defineStore(CollectionEnum.taskGroups, () => {
  const taskGroups: Ref<TaskGroupType[]> = ref([]);

  const getTaskGroups = async () => {
    return await getDocs(
      query(
        collection(firestore, CollectionEnum.taskGroups),
        where('uid', '==', auth.currentUser?.uid),
        where('status', '==', TaskGroupStatusEnum.proccess),
        orderBy('createdAt', 'asc'),
      ),
    );
  };

  const setTaskGroups = (response: QuerySnapshot) => {
    response.forEach(doc => {
      taskGroups.value.push({ ...doc.data(), id: doc.id } as TaskGroupType);
    });
  };

  const getAndSetTaskGroups = async () => {
    setTaskGroups(await getTaskGroups());
  };

  const createTaskGroup = async (title: string) => {
    try {
      return await addDoc(collection(firestore, CollectionEnum.taskGroups), {
        uid: auth.currentUser?.uid,
        status: TaskGroupStatusEnum.proccess,
        title: title,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      } as TaskGroupType);
    } catch (error) {}
  };

  const addTaskGroup = (id: string | undefined, title: string) => {
    taskGroups.value.push({
      id: id,
      uid: auth.currentUser?.uid,
      status: TaskGroupStatusEnum.proccess,
      title: title,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } as TaskGroupType);
  };

  const createAndAddTaskGroup = async (title: string) => {
    const response = await createTaskGroup(title);

    addTaskGroup(response?.id, title);

    return response;
  };

  const deleteTaskGroup = async (id: string) => {
    try {
      await updateDoc(doc(firestore, CollectionEnum.taskGroups, id), {
        status: TaskGroupStatusEnum.deleted,
      });
    } catch (error) {}
  };

  const removeTaskGroup = (id: string) => {
    taskGroups.value = taskGroups.value.filter(
      taskGroup => taskGroup.id !== id,
    );
  };

  const deleteAndRemoveTaskGroup = async (id: string) => {
    await deleteTaskGroup(id);
    removeTaskGroup(id);
  };

  return {
    taskGroups,
    getTaskGroups,
    setTaskGroups,
    getAndSetTaskGroups,
    createTaskGroup,
    addTaskGroup,
    createAndAddTaskGroup,
    deleteTaskGroup,
    removeTaskGroup,
    deleteAndRemoveTaskGroup,
  };
});
