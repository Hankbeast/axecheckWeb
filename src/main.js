import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import {getReq,postJson, posrForm, download} from "./api/index"

const app = createApp(App)

import router from './permission'
app.use(router)
app.use(Antd)

app.config.globalProperties.$get = getReq;
app.config.globalProperties.$post = postJson;
app.config.globalProperties.$posrForm = posrForm;
app.config.globalProperties.$download = download;
app.mount('#app')
