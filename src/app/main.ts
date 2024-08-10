import { createApp } from 'vue';
import { store } from './providers';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.use(store).mount('#app');
