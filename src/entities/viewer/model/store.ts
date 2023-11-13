import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '@/entities/firebase';

import { ViewerType } from './store.types';
import { UserCredential } from 'firebase/auth/cordova';

export const useViewerStore = defineStore('viewer', () => {
  const router = useRouter();

  const viewer: ViewerType = reactive({
    token: null,
    data: {
      email: null,
      uid: null,
    },
  });

  const setUser = (user: UserCredential['user']) => {
    viewer.token = user.accessToken;
    viewer.data.email = user.email;
    viewer.data.uid = user.uid;
  };

  const signin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        setUser(response.user);
        router.push('/board');
      })
      .catch(error => console.log(error));
  };

  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        setUser(response.user);
        router.push('/board');
      })
      .catch(error => console.log(error));
  };

  const signout = () => {
    signOut(auth);
  };

  return { viewer, signin, signup, signout };
});
