import { Component, Vue } from "vue-property-decorator";
import { Relays } from '@/models/relays';
import store from '@/store';


@Component
export default class CalcTop extends Vue {

    private relayPick: Relays = Relays.Free200;

    get relays() {
        const values = Object.values(Relays)
        return values;
    }

    set relay(relay: Relays){
        this.relayPick = relay;
        store.commit('setRelay', relay);
    }

    get relay(){
        return this.relayPick;

    }
}