import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import GenderFormatMixin from "@/mixins/gender-format-mixin";
import NameFormatMixin from "@/mixins/name-format-mixin";
import { namespace } from "vuex-class";
const calculate = namespace("calculate");

@Component
export default class SingleSelectionCalc extends Mixins(
  GenderFormatMixin,
  NameFormatMixin
) {
  @Prop()
  swimmerData!: Swimmer;

  @calculate.Getter("getCalculationSelection")
  private calculationSelection!: number[];

  @calculate.Mutation("addToSelectedForCalculation")
  private setSelected(id: number) {}

  @calculate.Mutation("removeFromSelectedForCalculation")
  private setUnSelected(id: number) {}

  @calculate.Getter("getCalculateForYear")
  private forYear!: number;

  get swimmer() {
    return this.swimmerData;
  }

  get age() {
    return this.forYear - this.swimmer.birthYear;
  }

  get name() {
    return this.getFullName(this.swimmer.firstName, this.swimmer.lastName);
  }

  get gender() {
    return this.getGenderShort(this.swimmerData.gender);
  }

  set select(val: boolean) {
    let id = this.swimmer.id;
    if (val == true) {
      this.setSelected(id);
    } else {
      this.setUnSelected(id);
    }
  }

  get select() {
    return this.calculationSelection.find((s) => s == this.swimmer.id) != null;
  }

  mounted() {
    this.setSelected(this.swimmer.id);
    console.log(this.swimmer);
  }
}
