import { defineStore } from 'pinia';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import { SectionStatusEnum, SectionType } from '@/shared/typicode';
import { auth, firestore } from '@/shared/firebase';

export const useSectionStore = defineStore('section', () => {
  const sectionList: SectionType[] = [];

  const getSections = async () => {
    await getDocs(
      query(
        collection(firestore, 'sections'),
        where('uid', '==', auth.currentUser?.uid),
      ),
    );
  };

  const createSection = async (title: string) => {
    try {
      await addDoc(collection(firestore, 'sections'), {
        title,
        status: SectionStatusEnum.proccess,
      });
    } catch (error) {}
  };

  const updateSection = async (id: string, title: string) => {
    try {
      await updateDoc(doc(firestore, 'sections', id), {
        title,
      });
    } catch (error) {}
  };

  const deleteSection = async (id: string) => {
    try {
      await updateDoc(doc(firestore, 'sections', id), {
        status: SectionStatusEnum.deleted,
      });
    } catch (error) {}
  };

  return {
    sectionList,
    getSections,
    createSection,
    updateSection,
    deleteSection,
  };
});
