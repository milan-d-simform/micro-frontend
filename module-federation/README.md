# Microfrontend Module Federation

This project demonstrates the use of Module Federation in a microfrontend architecture. The project consists of a host application and three microfrontends: microfrontend1, microfrontend2, and microfrontend3.

## Project Structure

- `host`: The main application that consumes the microfrontends.
- `microfrontend1`: The first microfrontend application.
- `microfrontend2`: The second microfrontend application.
- `microfrontend3`: The third microfrontend application.

## Getting Started

### Prerequisites

- Node.js
- pnpm / npm / yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/microfrontend-module-federation.git
    cd microfrontend-module-federation
    ```

2. Install dependencies for each project:
    ```sh
    cd host
    pnpm install
    cd ../microfrontend1
    pnpm install
    cd ../microfrontend2
    pnpm install
    cd ../microfrontend3
    pnpm install
    ```

### Running the Applications

1. Start the host application:
    ```sh
    cd host
    pnpm run build-n-preview
    ```

2. Start each microfrontend application in separate terminal windows:
    ```sh
    cd microfrontend1
    pnpm run build-n-preview
    ```

    ```sh
    cd microfrontend2
    pnpm run build-n-preview
    ```

    ```sh
    cd microfrontend3
    pnpm run build-n-preview
    ```

3. Open your browser and navigate to `http://localhost:5000` to see the host application consuming the microfrontends.

## Folder Details

### Host

The host application is responsible for loading and displaying the microfrontends. It uses Webpack's Module Federation plugin to dynamically import the microfrontends at runtime.

### Microfrontend1

Microfrontend1 is a standalone application that can be independently developed and deployed. It exposes its components to the host application using Module Federation.

### Microfrontend2

Microfrontend2 is similar to Microfrontend1 and follows the same principles. It can be independently developed and deployed, and it exposes its components to the host application.

### Microfrontend3

Microfrontend3 is another standalone application that can be independently developed and deployed. It also exposes its components to the host application using Module Federation.

## Learn More

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Microfrontends](https://micro-frontends.org/)
