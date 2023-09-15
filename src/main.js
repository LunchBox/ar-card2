import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AFRAME from 'aframe'

const app = createApp(App)

app.use(router)
app.use(AFRAME)

app.mount('#app')
