const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/door',
        name: 'Door',
        component: () => import('@/views/Door/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundVue',
        component: () => import('@/pages/notFound.vue')
    }
]
export default routes