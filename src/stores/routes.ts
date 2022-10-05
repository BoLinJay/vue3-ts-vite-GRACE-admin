import { defineStore } from 'pinia';

export const useAddRoutes = defineStore('addRoutes', {
    // 开启数据缓存
    persist: {
        enabled: true
    },
    state: () => {
        return {
            routes: []
        }
    }
})