import { getToken } from './../utils/enum';
import { createRouter, createWebHistory, type RouteComponent, type RouteRecordRaw } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'Door' && !getToken()) next('/door')
  next()
})
export default router
