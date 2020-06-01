import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import store from "@/store/index";
import { Swimmer } from "@/models/swimmer";
import { namespace } from 'vuex-class';
import NameFormatMixin from '@/mixins/name-format-mixin';
const search = namespace('search');

@Component
export default class SingleSelection extends Mixins(NameFormatMixin) {
  @Prop()
  swimmerData!: Swimmer;

  @search.Getter("timesLoaded")
  loadedTimes!: number[];

  get swimmer() {
    return this.swimmerData;
  }

  fullName(first: string, last: string) {
    return this.getFullName(first, last);
  }

  get timesLoaded() {
    return this.loadedTimes.find(t => t == this.swimmer.id) != null;
  }

  removeSwimmer() {
    store.commit("removeFromSelectedSwimmers", this.swimmerData.id);
  }
}
