# Microfrontend with Single-SPA

This project demonstrates a basic **Microfrontend Architecture** using **[Single-SPA](https://single-spa.js.org/)**. It consists of a **host (root-config)** application that integrates three independently developed microfrontends.

Each microfrontend is built and deployed independently but rendered seamlessly in the host via route-based mounting — with **no communication between them**.

---

## 🚀 Project Structure

- **`host`** - The root config that manages and mounts all microfrontends.
- **`microfrontend1`** - Independent Vue 3 app integrated via Single-SPA.
- **`microfrontend2`** - Independent Vue 3 app integrated via Single-SPA.
- **`microfrontend3`** - Independent Vue 3 app integrated via Single-SPA.

---

## 💠 Prerequisites

- **Node.js** (Latest LTS version recommended)
- **pnpm / npm / yarn** (Package manager)

---

## 📅 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/milan-d-simform/micro-frontend.git
   cd single-spa
   ```

2. Install dependencies for each application:
   ```sh
   cd host && pnpm install && cd ..
   cd microfrontend1 && pnpm install && cd ..
   cd microfrontend2 && pnpm install && cd ..
   cd microfrontend3 && pnpm install && cd ..
   ```

---

## 🚀 Running the Applications

Start each application in a separate terminal window:

```sh
# Host application
cd host
pnpm run start
```

```sh
# Microfrontend 1
cd microfrontend1
pnpm run serve
```

```sh
# Microfrontend 2
cd microfrontend2
pnpm run serve
```

```sh
# Microfrontend 3
cd microfrontend3
pnpm run serve
```

---

## 🌐 Access the Application

Visit the host application in your browser:  
🔗 [http://localhost:9000](http://localhost:9000)

Microfrontends will load based on the configured routes.

---

## 📂 Folder Overview

### `host`
- Single-SPA root config.
- Routes and mounts microfrontends.

### `microfrontend1`, `microfrontend2`, `microfrontend3`
- Standalone Vue 3 applications.

---

## 📚 Learn More

- [Single-SPA Documentation](https://single-spa.js.org/docs/getting-started-overview/)
- [Microfrontends](https://micro-frontends.org/)
- [Vue 3 + Vite](https://vitejs.dev/)
