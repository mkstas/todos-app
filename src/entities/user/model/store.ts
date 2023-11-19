import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  QuerySnapshot,
} from 'firebase/firestore';

import { auth, firestore } from '@/shared/firebase';
import { UserType } from './store.types';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();

  const userData: UserType = reactive({
    uid: null,
    email: null,
    userName: null,
  });

  const setUserData = (response: QuerySnapshot) => {
    response.forEach(doc => {
      Object.assign(userData, doc.data());
    });
  };

  const getUserData = async (uid: string | undefined) => {
    const response = await getDocs(
      query(collection(firestore, 'users'), where('uid', '==', uid)),
    );

    return response;
  };

  const saveUserData = async (user: UserType) => {
    const response = await addDoc(collection(firestore, 'users'), user);

    return response;
  };

  const signin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const response = await getUserData(auth.currentUser?.uid);

      setUserData(response);

      router.push('/board');
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (email: string, password: string, userName: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await saveUserData({ uid: response.user.uid, email, userName });

      const res = await getUserData(auth.currentUser?.uid);

      setUserData(res);

      router.push('/board');
    } catch (error) {
      console.log(error);
    }
  };

  const signout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return { userData, setUserData, getUserData, signin, signup, signout };
});
