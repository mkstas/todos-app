import { createApp } from 'vue';

import { router, store } from './providers';
import App from './index.vue';

export const bootstrap = () => {
  createApp(App).use(store).use(router).mount('#app');
};
