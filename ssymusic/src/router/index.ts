import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: "/",
      redirect: "/find",
    },
    {
      path: "/find",
      name: "find",
      component: () => import("../views/find/find.vue"),
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../views/mine/mine.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/listDetail/detail.vue"),
    },
  ],
});

export default router;
