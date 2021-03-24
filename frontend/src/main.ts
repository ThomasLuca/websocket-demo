import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './state'
import VueEllipseProgress from 'vue-ellipse-progress'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueEllipseProgress)
app.mount('#app')