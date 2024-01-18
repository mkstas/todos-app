import { createApp } from 'vue';

import { router, store, vuetify } from './providers';
import App from './index.vue';

export const bootstrap = () => {
  createApp(App).use(store).use(router).use(vuetify).mount('#app');
};
