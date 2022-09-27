import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// reset样式
import './assets/reset.css'
import './assets/main.css'

// 全局插件
import component from '@/plugins/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(component)
app.mount('#app')
