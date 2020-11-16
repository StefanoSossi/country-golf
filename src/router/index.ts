import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/pick',
    component: () => import ('../views/PickCamp.vue')
  },
  {
    path: '/camp1',
    component: () => import ('../views/Camp1.vue')
  },
  {
    path: '/main',
    component: () => import ('../views/MainPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
