import { createRouter, createWebHistory } from "vue-router";
import Home from "./../pages/Home.vue";
import About from "./../pages/About.vue";
import Portfolio from "./../pages/Portfolio.vue";
import Contact from "./../pages/Contact.vue";

const routes = [
  {
    path: "/Swetha_Narayan/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Swetha_Narayan/about",
    name: "About",
    component: About,
  },
  {
    path: "/Swetha_Narayan/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/Swetha_Narayan/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
