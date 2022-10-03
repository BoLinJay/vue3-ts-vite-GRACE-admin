const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/layout/HomeView.vue'),

    },
    {
        path: '/door',
        name: 'Door',
        component: () => import('@/views/Door/index.vue')
    },
    {
        path: '/goods',
        name: 'Goods',
        component: () => import('@/layout/HomeView.vue'),
        children: [
            {
                path: 'category',
                name: 'Category',
                component: () => import('@/views/goods/category.vue')
            },
            {
                path: 'release',
                name: 'Release',
                component: () => import('@/views/goods/release.vue')
            },
            {
                path: 'list',
                name: 'List',
                component: () => import('@/views/goods/list.vue')
            }
        ]
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import('@/layout/HomeView.vue'),
        children: [
            {
                path: 'list',
                name: 'List',
                component: () => import('@/views/order/list.vue')
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/layout/HomeView.vue'),
        children: [
            {
                path: 'info',
                name: 'Info',
                component: () => import('@/views/user/info.vue')
            },
            {
                path: 'list',
                name: 'List',
                component: () => import('@/views/user/list.vue')
            }
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/layout/HomeView.vue'),
        children: [
            {
                path: 'role',
                name: 'Role',
                component: () => import('@/views/auth/role.vue')
            },
            {
                path: 'menu',
                name: 'Menu',
                component: () => import('@/views/auth/menu.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundVue',
        component: () => import('@/pages/notFound.vue')
    }
]
export default routes