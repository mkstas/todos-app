import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  QuerySnapshot,
} from 'firebase/firestore';

import { auth, firestore } from '@/shared/firebase';
import { CollectionEnum, RoutesPathEnum, UserType } from '@/shared/typicode';

export const useUserStore = defineStore(CollectionEnum.users, () => {
  const router = useRouter();

  const user: UserType = reactive({
    uid: null,
    email: null,
    userName: null,
    createdAt: null,
    updatedAt: null,
  });

  const saveUser = async (userName: string, email: string) => {
    await addDoc(collection(firestore, CollectionEnum.users), {
      uid: auth.currentUser?.uid,
      email: email,
      userName: userName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    } as UserType);
  };

  const getUser = async () => {
    return await getDocs(
      query(
        collection(firestore, CollectionEnum.users),
        where('uid', '==', auth.currentUser?.uid),
      ),
    );
  };

  const setUser = (response: QuerySnapshot) => {
    response.forEach(doc => {
      Object.assign(user, doc.data());
    });
  };

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);

    setUser(await getUser());
  };

  const signInWithRedirect = async (email: string, password: string) => {
    try {
      await signIn(email, password);

      router.push(RoutesPathEnum.home);
    } catch (error) {}
  };

  const signUp = async (userName: string, email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);

    await saveUser(userName, email);

    setUser(await getUser());
  };

  const signUpWithRedirect = async (
    userName: string,
    email: string,
    password: string,
  ) => {
    try {
      await signUp(userName, email, password);

      router.push(RoutesPathEnum.board);
    } catch (error) {}
  };

  const signOutWithRedirect = async () => {
    await signOut(auth);

    router.push(RoutesPathEnum.home);
  };

  return {
    user,
    setUser,
    getUser,
    signInWithRedirect,
    signUpWithRedirect,
    signOutWithRedirect,
  };
});
