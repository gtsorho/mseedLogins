import { createRouter, createWebHistory } from 'vue-router'
import Adminsignin from '../views/adminsignin.vue'
import Loanapp from '../views/loanapp.vue'


const routes = [
  {
    path: '/adminsignin',
    name: 'Adminsignin',
    component: Adminsignin
  },
  {
    path: '/loanapp',
    name: 'Loanapp',
    component: Loanapp
  },
  {
    path: '/customersignin',
    name: 'Customersignin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/customersignin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
