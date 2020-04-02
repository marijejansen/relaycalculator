import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import SingleSelectionCalc from "@/components/calculate/single-selection-calc";
import CalcResult from "@/components/calculate/calc-result";
import store from "@/store/index";
import { RelayTeam } from "@/models/relay-team";
import { namespace } from 'vuex-class';
const calculate = namespace('calculate');

@Component({ components: { SingleSelectionCalc, CalcResult } })
export default class CalcOverview extends Vue {
   
  private selectedSwimmersList: Swimmer[] = [];

  @calculate.Getter('getCalculatedTeams')
  private relayTeams: RelayTeam[] = [];

  get selectedSwimmers() {
    this.selectedSwimmersList = store.state.selectedSwimmers;
    return this.selectedSwimmersList;
  }

  @calculate.Action("getCalculation")
  async calculate() {
  }

  get relays() {
    return this.relayTeams;
  }
}
