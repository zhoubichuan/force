import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/force.vue"),
  },
  {
    path: '/relation',
    name: 'relation',
    component: () => import("../views/relation.vue"),
  }
]

const router = createRouter({
  history: createWebHistory('/force'),
  routes
})

export default router
