import { createRouter, createWebHashHistory } from "vue-router"
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/to.vue"),
    },
    {
      path: "/eg",
      component: () => import("../components/HelloWorld.vue"),
    },
    {
      path: "/todo",
      component: () => import("../views/ToDoItem.vue"),
    },
  ],
})
