import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import navs from '@/utils/navs'


import Login from '@/components/common/login/login.vue'

const routes = []

navs.map(ele=>{
  routes.push({path:ele.path,component:ele.comm})
  if(ele.children){
    ele.children.map(ele=>{
      routes.push({path:ele.path,component:ele.comm})
    })
  }
})
// console.log(routes)
const router = new VueRouter({
  routes : [
    ...routes,
    {path: '/login',components:{login:Login}},
    {path: '*',redirect:'/home'}
  ]
  
})

router.beforeEach(function(to, from, next) {
  if (to.path != '/login') {
    if(localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
