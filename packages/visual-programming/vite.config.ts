import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx({
      include: [/\.[jt]sx$/],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@/*': resolve(__dirname, './src/*'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 9000,
  },
})
