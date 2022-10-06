import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app').use
