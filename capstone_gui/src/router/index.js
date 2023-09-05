import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from "vue3-cookies";
const {cookies} = useCookies();

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter() {
      if (!cookies.get('ActualUser')) {
        router.push({ name: 'register' })
      }
    },
  },
  {
    path: "/OurStory",
    name: "OurStory",
    component: () => import("../views/OurStoryView.vue"),
  },
  {
    path: "/support",
    name: "support",
    component: () => import("../views/SupportView.vue"),
  },
  {
    path: "/boats",
    name: "boats",
    component: () => import("../views/BoatsView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
