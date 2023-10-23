import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
      path: "/",
      name: "Layout",
      component: () => import("../components/Layout.vue"),
      meta: { title: 'Layout' },
      redirect: '/register',
      children: [
        {
          path: '/check',
          name: "check",
          component: () => import("../views/Check/index.vue"),
          meta: { title: 'check' }
        },
        {
          path: '/detail',
          name: "detail",
          component: () => import("../views/Detail/index.vue"),
          meta: { title: 'detail' }
        },
      ]
    },
    {
      path: '/register',
      name: "register",
      component: () => import("../views/Register/index.vue"),
      meta: { title: 'register' }
    },
    {
      path: '/login',
      name: "login",
      component: () => import("../views/Login/index.vue"),
      meta: { title: 'login' }
    },
  ]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router
