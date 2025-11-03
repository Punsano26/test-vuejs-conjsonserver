import './assets/main.css'
import routes from './router'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(routes).mount('#app')
