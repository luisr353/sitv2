import "bootstrap/dist/css/bootstrap.css"
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import { createPinia } from "pinia";


//rutas
const routes = [
    {
    path: '/',
      component: () => import('../src/views/Login'),
    },
    {
    path: '/home',
      component: () => import('../src/views/Home'),
    }

]

//crear objeto de rutas

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instancia de vue
const app = createApp(App)
app.use(createPinia());
app.use(router)
.mount('#app')

