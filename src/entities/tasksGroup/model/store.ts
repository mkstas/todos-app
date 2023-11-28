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
} from 'firebase/firestore';

import { TaskGroupStatusEnum, TaskGroupType } from '@/shared/typicode';
import { auth, firestore } from '@/shared/firebase';

export const useTasksGroupStore = defineStore('tasksGroup', () => {
  const tasksGroups: Ref<TaskGroupType[]> = ref([]);

  const getTasksGroup = async () => {
    return await getDocs(
      query(
        collection(firestore, 'tasksGroup'),
        where('uid', '==', auth.currentUser?.uid),
      ),
    );
  };

  const setTasksGroup = (response: QuerySnapshot) => {
    response.forEach(doc => {
      tasksGroups.value.push(doc.data() as TaskGroupType);
    });
  };

  const createTaskGroup = async (title: string) => {
    try {
      await addDoc(collection(firestore, 'tasksGroup'), {
        uid: auth.currentUser?.uid,
        status: TaskGroupStatusEnum.proccess,
        title,
      });
    } catch (error) {}
  };

  const updateTaskGroup = async (id: string, title: string) => {
    try {
      await updateDoc(doc(firestore, 'tasksGroup', id), {
        title,
      });
    } catch (error) {}
  };

  const deleteTaskGroup = async (id: string) => {
    try {
      await updateDoc(doc(firestore, 'tasksGroup', id), {
        status: TaskGroupStatusEnum.deleted,
      });
    } catch (error) {}
  };

  return {
    tasksGroups,
    getTasksGroup,
    setTasksGroup,
    createTaskGroup,
    updateTaskGroup,
    deleteTaskGroup,
  };
});
