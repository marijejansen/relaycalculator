import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import store from '@/store';
import { Swimmer } from '@/models/swimmer';
import SwimmerTimes from './swimmer-times';

@Component
export default class SingleSelection extends Vue {

    @Prop()
    loaded!: boolean;
   
    @Prop()
    swimmerData!: Swimmer;

    get swimmer() {
        return this.swimmerData;
    }

    @Watch("swimmer.timesLoaded", {deep:true})
    get timesLoaded() {
        return this.swimmer.timesLoaded;
    }

    // @Watch('timesLoaded') onChanged() {
    //     console.log('TEST');
    //   }

    // removeSwimmer() {
    //     store.commit('removeFromSelectedSwimmers', this.swimmerData.id);
    // }
}