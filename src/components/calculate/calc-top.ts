import { Component, Vue } from "vue-property-decorator";
import { Relay } from '@/models/relay';
import store from '@/store';


@Component
export default class CalcTop extends Vue {

    private relayPick: Relay = Relay.Free200;

    get relays() {
        const values = Object.values(Relay)
        return values;
    }

    set relay(relay: Relay){
        this.relayPick = relay;
        store.commit('setRelay', relay);
    }

    get relay(){
        return this.relayPick;
    }
}