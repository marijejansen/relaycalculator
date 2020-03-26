import Vue from "vue";
import App from "./relay-calculator-app.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "./scss/main.scss";
