import { Component, Vue, Prop } from "vue-property-decorator";
import store from "@/store/index";
import { Swimmer } from "@/models/swimmer";
import { namespace } from 'vuex-class';
const search = namespace('search');

@Component
export default class SingleSelection extends Vue {
  @Prop()
  swimmerData!: Swimmer;

  get swimmer() {
    return this.swimmerData;
  }

  @search.Getter("timesLoaded")
  private getTimesLoaded(swimmerId: number) {}

  get timesLoaded(){
    return this.getTimesLoaded(this.swimmer.id);
  }

  removeSwimmer() {
    store.commit("removeFromSelectedSwimmers", this.swimmerData.id);
  }
}
