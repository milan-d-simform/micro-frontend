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
      name: 'mf1',
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/tailwind.css";`, // Ensure it's included
      },
    },
  },
  build: {
    target: "ES2022",
    rollupOptions: {
      output: {
        assetFileNames: 'mf1.[name].[ext]', // Ensure CSS file is emitted
      },
    },
  },
})
