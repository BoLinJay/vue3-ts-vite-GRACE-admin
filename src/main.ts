import { createApp } from 'vue'
import piniaPluginPersist from 'pinia-plugin-persist';
import App from './App.vue'
import router from './router'
import pinia from '@/stores/store'

import '@/styles/index.scss';  // global css 样式

import component from '@/plugins/index'  // global plugins 

pinia.use(piniaPluginPersist)  // pinia数据持久化

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(component)
app.mount('#app')

