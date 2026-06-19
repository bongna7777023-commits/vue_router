import { createRouter, createWebHistory } from "vue-router";
import home from "@/View/home.vue";
import NotFound from "@/View/NotFound.vue";
import about from "@/View/about.vue";

const routes = [
  { path: "/",
    name: "home",
    component: home
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/about",
    name: "about",
    component:about,
  }

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
