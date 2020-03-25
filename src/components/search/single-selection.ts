import { Component, Vue, Prop } from "vue-property-decorator";
import store from '@/store';
import { Swimmer } from '@/models/swimmer';

@Component
export default class SingleSelection extends Vue {
   
    @Prop()
    swimmerData!: Swimmer;

    get swimmer() {
        return this.swimmerData;
    }

    get timesLoaded() {
        return store.getters.timesLoaded(this.swimmer.id);
    }

    removeSwimmer() {
        store.commit('removeFromSelectedSwimmers', this.swimmerData.id);
    }
}