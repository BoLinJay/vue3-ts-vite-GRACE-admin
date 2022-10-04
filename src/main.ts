import { createApp } from 'vue'
import piniaPluginPersist from 'pinia-plugin-persist';
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'

import '@/styles/index.scss';  // global css 样式

import component from '@/plugins/index'  // global plugins 

const pinia = createPinia();  // pinia数据持久化
pinia.use(piniaPluginPersist)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(component)
app.mount('#app')

