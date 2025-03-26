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
      name: 'mf3',
      // Entry file
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './App': './src/App.vue',
        './Button': './src/components/Button.vue',
      },
      // Shared modules
      shared: {
        vue: { singleton: true },
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
  }
})
