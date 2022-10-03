import { createApp } from 'vue'
import piniaPluginPersist from 'pinia-plugin-persist';
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
// reset样式
import './assets/reset.css'
import './assets/main.css'
// 全局插件
import component from '@/plugins/index'
// aniJS动画
import './styles/animation.css'
// pinia数据持久化
const pinia = createPinia();
pinia.use(piniaPluginPersist)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(component)
app.mount('#app')

