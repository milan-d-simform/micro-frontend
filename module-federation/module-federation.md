# 🔩 Setting Up Microfrontends with **Module Federation (Vue 3 + Vite)**

## 🧱 Step 1: Create a Microfrontend App

```bash
pnpm create vue@latest
# ✅ Select required features (e.g., TypeScript, Pinia)
cd microfrontend1
pnpm install
```

### 📦 Install Module Federation Plugin

```bash
pnpm add @originjs/vite-plugin-federation --save-dev
```

---

## ⚙️ Step 2: Configure Module Federation in Microfrontend

Update `vite.config.ts` or `vite.config.js`:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mf1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue' // 👈 Expose your component(s)
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'ES2022' // 👈 Required for Module Federation
  }
})
```

---

## 🧪 Step 3: Build and Preview Microfrontend

```bash
pnpm run build
pnpm run preview --port 5001
```

---

## 🧰 Step 4: Create and Configure the Host App

```bash
pnpm create vue@latest
cd host-app
pnpm install
```

### 📦 Install Module Federation Plugin

```bash
pnpm add @originjs/vite-plugin-federation --save-dev
```

### ⚙️ Update `vite.config.ts` or `vite.config.js` in Host

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      filename: 'hostEntry.js',
      remotes: {
        mf1: 'http://localhost:5001/assets/remoteEntry.js'
      },
      shared: {
        vue: { singleton: true }
      }
    })
  ]
})
```

---

## 🧹 Step 5: Use Remote Component in Host

### In any Vue component inside the host app:

```vue
<script setup>
import mf1App from 'mf1/App';
</script>

<template>
  <mf1App />
</template>
```

---

## 🚀 Step 6: Run the Host App

```bash
pnpm run dev
```

Or to build and preview:

```bash
pnpm run build && pnpm run preview
```

---

## 💡 Tips

- 🌟 Ensure `remoteEntry.js` is accessible via the correct URL and port.
- 🔄 Clear cache or use incognito to force fresh fetch of remote assets.
