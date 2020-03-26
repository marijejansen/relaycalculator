import { Component, Vue } from "vue-property-decorator";
import CalcOverview from "../components/calculate/calc-overview";
import CalcTop from "../components/calculate/calc-top";

@Component({ components: { CalcOverview, CalcTop } })
export default class Calculate extends Vue {}
