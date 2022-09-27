import NotFoundVue from '@/pages/notFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/door',
      name: 'door',
      component: () => import('@/views/Door/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundVue',
      component: () => import('@/pages/notFound.vue')
    }
  ]
})

export default router
