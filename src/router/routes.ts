const routes = [
    {
        path: '/',
        redirect: { name: 'goodsCategory' },
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
                name: 'goodsCategory',
                component: () => import('@/views/goods/category.vue'),
                meta: {
                    title: '商品分类'
                }
            },
            {
                path: 'release',
                name: 'goodsRelease',
                component: () => import('@/views/goods/release.vue'),
                meta: {
                    title: '发布商品',
                }
            },
            {
                path: 'list',
                name: 'goodsList',
                component: () => import('@/views/goods/list.vue'),
                meta: {
                    title: '商品列表'
                }
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
                name: 'orderList',
                component: () => import('@/views/order/list.vue'),
                meta: {
                    title: '订单列表'
                }
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
                name: 'userInfo',
                component: () => import('@/views/user/info.vue'),
                meta: {
                    title: '账户信息'
                }
            },
            {
                path: 'list',
                name: 'userList',
                component: () => import('@/views/user/list.vue'),
                meta: {
                    title: '用户列表'
                }
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
                name: 'authRole',
                component: () => import('@/views/auth/role.vue'),
                meta: {
                    title: '用户角色'
                }
            },
            {
                path: 'menu',
                name: 'authMenu',
                component: () => import('@/views/auth/menu.vue'),
                meta: {
                    title: '菜单权限'
                }
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