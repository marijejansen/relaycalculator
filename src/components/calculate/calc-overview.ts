import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import SingleSelectionCalc from "@/components/calculate/single-selection-calc";
import CalcResult from "@/components/calculate/calc-result";
import store from "@/store";
import { RelayTeam } from "@/models/relay-team";
import { Relay } from "@/models/relay";
import { Stroke } from "@/models/stroke";

@Component({ components: { SingleSelectionCalc, CalcResult } })
export default class CalcOverview extends Vue {
  private selectedSwimmersList: Swimmer[] = [];
  private relayTeams: RelayTeam[] = [];

  get selectedSwimmers() {
    this.selectedSwimmersList = store.state.selectedSwimmers;
    return this.selectedSwimmersList;
  }

  async calculate() {
    store.commit("getCalculation");
  }

  get relays() {
    this.relayTeams = store.state.calculatedTeams;
    return this.relayTeams;
  }
}
