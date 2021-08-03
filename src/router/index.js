import Vue from 'vue'
import Router from 'vue-router'
import release from "./modules/release"
import entrance from "./modules/entrance"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import ('@/views/login')
    },
    release,
    entrance
  ]
})

export default router;