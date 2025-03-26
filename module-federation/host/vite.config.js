import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    federation({
      name: 'host-app',
      // Entry file
      filename: 'hostEntry.js',
      // Modules to consume
      remotes: {
        mf1: "http://localhost:5001/assets/remoteEntry.js",
        mf2: "http://localhost:5002/assets/remoteEntry.js",
        mf3: "http://localhost:5003/assets/remoteEntry.js"
      },
      // Modules to expose
      exposes: {
        './store/count': './src/store/count.ts',
      },
      // Shared modules
      shared: {
        vue: { singleton: true },
        pinia: { singleton: true }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: "ES2022",
    rollupOptions: {
      // Mark it as external to avoid bundling errors
      external: ['mf1/globalStyles', 'mf2/globalStyles', 'mf3/globalStyles'],
    },
  },
})
