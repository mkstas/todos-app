import { createApp } from 'vue';
import { store } from './providers';
import App from './index.vue';
import './index.css';

export const bootstrap = () => {
  const app = createApp(App);

  app.use(store).mount('#app');
};
