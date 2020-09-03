import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home.vue'
  

const router = new VueRouter({
  routes : [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
