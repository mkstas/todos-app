import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: ['resources/src/app.ts'],
      refresh: true,
    }),
  ],

  resolve: {
    alias: {
      '@': '/resources/src',
    },
  },
});
