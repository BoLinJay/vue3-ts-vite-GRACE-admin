import { defineStore } from 'pinia'

export const useCollapseStore = defineStore('Collapse', {
  // 开启数据缓存
  persist: {
    enabled: true
  },
  state: () => {
    return {
      isCollapse: true,
    }
  },
  actions: {},
  getters: {}
})
