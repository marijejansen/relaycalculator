import Vue from "vue";
import App from "./relay-calculator-app.vue";
import router from "./router";
import store from "@/store/index";

Vue.config.productionTip = false;

//Vue.use();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "./scss/main.scss";
