import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import ViewTimes from "./views/view-times.vue";
import Calculate from "./views/calculate";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/view-times",
      name: "viewtimes",
      component: ViewTimes,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/calculate",
      name: "calculate",
      component: Calculate,
      meta: {
        requireAuth: true
      }
    }
  ]
});
