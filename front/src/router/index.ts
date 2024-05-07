import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ClientePage from '../views/ClientePage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cliente'
  },{
    path: '/cliente',
    name: 'Cliente',
    component: ClientePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
