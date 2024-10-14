import { createRouter, createWebHistory } from "vue-router";
import Register from "@/components/Bt09_10/Register.vue";
import Login from "@/components/Bt09_10/Login.vue";
import UserProfile from "@/components/Bt09_10/UserProfile.vue";

const routes = [
  { path: "/", redirect: "/register" },
  { path: "/register", component: Register },
  { path: "/login", name: "Login", component: Login },
  { path: "/profile", name: "UserProfile", component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
