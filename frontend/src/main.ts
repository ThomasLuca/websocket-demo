import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state'
import VueEllipseProgress from 'vue-ellipse-progress'
import VueApexCharts from 'vue3-apexcharts'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueEllipseProgress)
app.use(VueApexCharts)
app.mount('#app')