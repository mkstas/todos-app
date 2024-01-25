import { createApp } from 'vue';
import App from './index.vue';
import './index.css';

export const bootstrap = () => {
  const app = createApp(App);
  app.mount('#app');
};
