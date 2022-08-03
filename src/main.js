import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

//rutas
const routes = [
    {
    path: '/',
      component: () => import('../src/views/Login'),
    }
]

//crear objeto de rutas

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instancia de vue
const app = createApp(App)

app.use(router)

.mount('#app')
