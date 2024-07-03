import {createRouter, createWebHistory} from 'vue-router'
import Index from './pages/index.vue'
import Setting from './pages/setting.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/setting', component: Setting },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;