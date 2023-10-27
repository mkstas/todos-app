import { createApp } from 'vue';

import { pinia, router } from './providers';
import App from './index.vue';

import './index.css';

export const bootstrap = () => {
  const app = createApp(App);

  app.use(router);
  app.use(pinia);
  app.mount('#app');
};
