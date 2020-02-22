import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import store from '@/store';


@Component
export default class RelayCalculatorApp extends Vue {

    created() {
        store.subscribe((mutation, state) => {
                localStorage.setItem('store-relay', JSON.stringify(state))
        });
    }
}