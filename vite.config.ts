import { fileURLToPath, URL } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { MarkDown } from './plugins/MarkDown.plugin';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/sote-home',
  plugins: [
    vue({
    }),
    vueJsx(),
    MarkDown(),
    VitePWA(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
