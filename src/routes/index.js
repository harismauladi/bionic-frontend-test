import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "task1",
    component: () => import("../views/TaskOne.vue"),
  },
  {
    path: "/task-2",
    name: "task2",
    component: () => import("../views/TaskTwo.vue"),
  },
  {
    path: "/task-2/detail/:id",
    name: "jobDetail",
    component: () => import("../views/JobDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
