import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'

const app = createApp(App)

import router from './permission'
app.use(router)
app.use(Antd)

app.mount('#app')
