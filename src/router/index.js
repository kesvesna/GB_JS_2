import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage";
import SearchPage from "../components/SearchPage";
import RegistrationPage from "../components/RegistrationPage";
import CartPage from "../components/CartPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage
  },
  {
    path: "/search",
    name: "SearchPage",
    component: SearchPage
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: RegistrationPage
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
