import './assets/main.css'

// Importing global styles from other microfrontends
import('mf1/GlobalStyles')
import('mf2/GlobalStyles')
import('mf3/GlobalStyles')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')