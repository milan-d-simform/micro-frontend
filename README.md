# 🤩 Micro Frontend Architectures (Module Federation & Single-SPA)

This repository showcases two distinct implementations of **Microfrontend Architecture** using modern JavaScript tooling:

- ✅ **[Webpack Module Federation](./module-federation)**  
- ✅ **[Single-SPA](./single-spa)**  

Each implementation demonstrates how to build, deploy, and integrate multiple independently developed frontend apps (microfrontends) into a single cohesive experience.

---

## 📦 Project Structure

```bash
micro-frontend/
├── module-federation/   # Microfrontends using Webpack Module Federation
├── single-spa/          # Microfrontends using Single-SPA
```

---

## 🔍 What's Inside?

### 📁 [`module-federation`](./module-federation)

A microfrontend system built with **Webpack Module Federation**.

- **Host + 3 Microfrontends**
- Communication via:
  - Props and event emitters
  - Shared Pinia store
  - Custom browser events
- One microfrontend fetches jokes via an open API

👉 [View Module Federation README](./module-federation/README.md)

👉 [Setting Up Microfrontends with Module Federation (Vue 3 + Vite) README](./module-federation/module-federation.md)

---

### 📁 [`single-spa`](./single-spa)

A simplified example of **Single-SPA**-based microfrontends.

- **Host + 3 Microfrontends**
- Pure integration to showcase routing-based mounting

👉 [View Single-SPA README](./single-spa/README.md)

👉 [Setting Up Microfrontends with Single-SPA README](./single-spa/single-spa.md)

---

## 🛠 Prerequisites

- **Node.js** (LTS version recommended)
- **pnpm** (preferred) or **npm/yarn**

---

## 🧪 Run Locally

Each implementation is fully independent. Follow setup instructions in their respective folders:

```bash
cd module-federation
# OR
cd single-spa
```

---

## 🌐 Use Case

This repository is ideal for:

- Learning and comparing **Module Federation** vs **Single-SPA**
- Building scalable microfrontend applications
- Exploring different **communication strategies** between micro apps

---

## 🧠 Learn More

- [Microfrontends Architecture](https://micro-frontends.org/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Single-SPA](https://single-spa.js.org/)
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
