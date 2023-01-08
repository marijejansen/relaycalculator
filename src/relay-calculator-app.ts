import { Component, Mixins } from "vue-property-decorator";
import store from "@/store/index";
import TestDataMixin from "./mixins/test-data-mixin";
import { Swimmer } from "./models/swimmer";

@Component
export default class RelayCalculatorApp extends Mixins(TestDataMixin) {
  get isLoading() {
    return store.getters.isLoading;
  }

  async getData() {
    const swimmers: Swimmer[] = this.getTestData();
    swimmers.forEach(swimmer => {
      store.commit("addToSelectedSwimmers", swimmer);
    });
    
    await Promise.all(swimmers.map(swimmer => {
      store.dispatch("updateWithTimes", swimmer.id);
    }, () => store.commit("addToLocalStorage")))
  }
}
