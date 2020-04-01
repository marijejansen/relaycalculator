import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import NameFormatMixin from "@/mixins/name-format-mixin";
import TimeFormatMixin from "@/mixins/time-format-mixin";
import SingleResultName from "@/components/calculate/single-result-name";

import { RelayTeam } from "@/models/relay-team";
import store from "@/store/index";
import GenderFormatMixin from "@/mixins/gender-format-mixin";

@Component({ components: { SingleResultName } })
export default class CalcResult extends Mixins(
  TimeFormatMixin,
  GenderFormatMixin
) {
  @Prop()
  private relayTeam!: RelayTeam;

  get team() {
    return this.relayTeam;
  }

  get swimmers() {
    return this.relayTeam.swimmers;
  }

  get time() {
    var time = this.toTimeString(this.team.time);
    return time;
  }

  get gender() {
    return this.getGenderShort(this.team.gender);
  }
}
