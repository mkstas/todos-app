import { reactive } from 'vue';
import { defineStore } from 'pinia';

import { ViewerType } from './store.types';

export const useViewerStore = defineStore('viewer', () => {
  const viewer: ViewerType = reactive({
    email: null,
    password: null,
    token: null,
  });

  const signin = async () => {};

  const signup = async () => {};

  const signout = async () => {};

  return { viewer, signin, signup, signout };
});
