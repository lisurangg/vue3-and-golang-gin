import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import echarts  from 'echarts'
import echarts from 'echarts'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(ElementPlus)
app.use(echarts)
app.mount('#app')

