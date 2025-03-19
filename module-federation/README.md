# Microfrontend Module Federation

This project demonstrates the implementation of Microfrontend Architecture using Webpack's Module Federation. The architecture consists of a host application that dynamically loads three independent microfrontends. Each microfrontend is developed, built, and deployed independently while maintaining seamless integration with the host application.

## 🚀 Project Structure

- **`host`**: The main application that consumes the microfrontends.
- **`microfrontend1`**: Communicates with the host using props and event emitters.
- **`microfrontend2`**: Uses a shared Pinia store for communication and includes a joke-fetching feature.
- **`microfrontend3`**: Communicates using custom events.

## 📌 Features

### Common Features Across Microfrontends
- Each microfrontend has **increment (+)** and **decrement (-)** buttons to manage a counter.
- The counter state is shared with the host using different communication strategies.

### Microfrontend-Specific Features
- **Microfrontend 1**: Uses **props and event emitters** to communicate with the host.
- **Microfrontend 2**: Uses a **shared Pinia store** to synchronize state with the host and other microfrontends.
  - Includes a **"Get New Joke"** button that fetches a joke from an open API and stores it in Pinia.
  - The **host application** reads the joke from the shared Pinia store and displays it.
- **Microfrontend 3**: Uses **custom events** for communication with the host.

## 🛠 Prerequisites
- **Node.js** (Latest LTS version recommended)
- **pnpm / npm / yarn** (Package manager)

## 📥 Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/milan-d-simform/micro-frontend.git
    cd module-federation
    ```

2. Install dependencies for each project:
    ```sh
    cd host && pnpm install && cd ..
    cd microfrontend1 && pnpm install && cd ..
    cd microfrontend2 && pnpm install && cd ..
    cd microfrontend3 && pnpm install && cd ..
    ```

## 🚀 Running the Applications

1. Start the **host** application:
    ```sh
    cd host
    pnpm run build-n-preview
    ```

2. Start each **microfrontend** in separate terminal windows:
    ```sh
    cd microfrontend1 && pnpm run build-n-preview
    ```
    ```sh
    cd microfrontend2 && pnpm run build-n-preview
    ```
    ```sh
    cd microfrontend3 && pnpm run build-n-preview
    ```

3. Open your browser and navigate to:
   - `http://localhost:5000` → Host application (loading microfrontends dynamically)

## 📂 Folder Details

### Host Application (`host`)
- Acts as the central hub that dynamically loads and integrates microfrontends.
- Uses **Webpack Module Federation** for runtime imports.
- Fetches and displays the joke from **Microfrontend 2's** shared Pinia store.

### Microfrontend 1 (`microfrontend1`)
- Standalone application that uses **props & event emitters** to communicate with the host.
- The host listens to events and updates its UI accordingly.

### Microfrontend 2 (`microfrontend2`)
- Uses **Pinia** to share state between the microfrontend and the host.
- Includes a "Get New Joke" button that fetches a random joke using an **Open API** and stores it in Pinia.
- The host application reads and displays the joke from the shared store.

### Microfrontend 3 (`microfrontend3`)
- Uses **custom events** to send updates to the host.
- The host listens for these events and updates the UI accordingly.

## 📖 Learn More
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Microfrontends](https://micro-frontends.org/)
