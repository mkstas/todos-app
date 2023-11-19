import { App, createApp } from 'vue';

import { auth } from '@/shared/firebase';

import { pinia, router } from './providers';
import VueApp from './index.vue';

import './index.css';

export const bootstrap = () => {
  let app: App<Element>;

  auth.onAuthStateChanged(() => {
    if (!app) {
      app = createApp(VueApp);

      app.use(router);
      app.use(pinia);

      app.mount('#app');
    }
  });
};
