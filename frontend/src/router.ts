import { createRouter, createWebHistory } from 'vue-router'

import Sensors from '@/views/Sensors.vue'
import Settings from '@/views/Settings.vue'
import SystemInfo from '@/views/SystemInfo.vue'

const routes = [
  { path: '/', component: Sensors },
  { path: '/settings', component: Settings },
  { path: '/system-info', component: SystemInfo },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router