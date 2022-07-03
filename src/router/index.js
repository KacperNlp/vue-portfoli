import Vue from "vue";
import Router from "vue-router";
import home from "@/pages/home";
import portfolio from "@/pages/portfolio";
import techStack from "@/pages/techStack";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: portfolio
    },
    {
      path: "/tech-stack",
      name: "tech-stack",
      component: techStack
    }
  ]
});
