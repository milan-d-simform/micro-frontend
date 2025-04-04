import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'mf3',
      // Entry file
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        // Components
        './App': './src/App.vue',
        './Button': './src/components/Button.vue',
        // Global Styles
        './GlobalStyles': './src/global-styles.js',
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
