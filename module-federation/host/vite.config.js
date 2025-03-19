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
      name: 'host-app',
      filename: 'hostEntry.js',
      remotes: {
        mf1: "http://localhost:5001/assets/remoteEntry.js",
        mf2: "http://localhost:5002/assets/remoteEntry.js",
        mf3: "http://localhost:5003/assets/remoteEntry.js"
      },
      // Modules to expose
      exposes: {
        './store/count': './src/store/count.ts',
      },
      shared: {
        vue: {
          singleton: true,
          eager: true,
        },
        pinia: {
          singleton: true,
          eager: true,
        },
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
  },
})
