import { Component, Vue, Prop } from "vue-property-decorator";
import store from "@/store/index";
import { Swimmer } from "@/models/swimmer";
import { namespace } from 'vuex-class';
const search = namespace('search');

@Component
export default class SingleSelection extends Vue {
  @Prop()
  swimmerData!: Swimmer;

  @search.Getter("timesLoaded")
  loadedTimes!: number[];

  get swimmer() {
    return this.swimmerData;
  }

  get timesLoaded() {
    return this.loadedTimes.find(t => t == this.swimmer.id) != null;
  }

  removeSwimmer() {
    store.commit("removeFromSelectedSwimmers", this.swimmerData.id);
  }
}
