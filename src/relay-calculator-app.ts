import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import store from "@/store/index";

@Component
export default class RelayCalculatorApp extends Vue {
  get isLoading() {
    return store.getters.isLoading;
  }
}
