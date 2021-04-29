import { createRouter, createWebHashHistory } from "vue-router"
export default createRouter({
  history: createWebHashHistory('Vue-D3'),
  routes: [
    {
      path: "/",
      component: () => import("../views/force.vue"),
    },
    {
      path: "/relation",
      component: () => import("../views/relation.vue"),
    },
  ],
})
