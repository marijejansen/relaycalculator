import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import { Gender } from "@/models/gender";
import GenderFormatMixin from "@/mixins/gender-format-mixin";
import store from "@/store";
import NameFormatMixin from "@/mixins/name-format-mixin";

@Component
export default class SingleSelectionCalc extends Mixins(
  GenderFormatMixin, NameFormatMixin) {

  @Prop()
  swimmerData!: Swimmer;

  private selected: boolean = store.getters.isSelected(this.swimmer.id); 

  get swimmer() {
    return this.swimmerData;
  }

  get name() {
    return this.getFullName(this.swimmer.firstName, this.swimmer.lastName);
  }

  get gender() {
    return this.getGenderShort(this.swimmerData.gender);
  }

  set select(val: boolean) {
    this.selected = val;
    if (val == true) {
      store.commit("addToSelectedForCalculation", this.swimmer.id);
    } else {
      store.commit("removeFromSelectedForCalculation", this.swimmer.id);
    }
  }

  get select() {
    return this.selected;
  }

  mounted() {
    store.commit('addToSelectedForCalculation', this.swimmer.id);
    this.selected = store.getters.isSelected(this.swimmer.id);
  }
}
