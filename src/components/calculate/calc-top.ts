import { Component, Vue } from "vue-property-decorator";
import { Relay, RelayStrings } from "@/models/relay";
import store from "@/store";
import { Course } from "@/models/course";

@Component
export default class CalcTop extends Vue {
  private relayPick: Relay = Relay.Free200;

  private course: Course = Course.ShortCourse;

  get isShortCourse() {
    return this.course == Course.ShortCourse;
  }

  set isShortCourse(isShort: boolean) {
    this.course = isShort ? Course.ShortCourse : Course.LongCourse;
  }

  get relays() {
    const values = Object.values(Relay).filter(x => isNaN(Number(x)));
    return values;
  }

  set relay(relay: Relay) {
    this.relayPick = (<any>Relay)[relay];
    store.commit("setRelay", (<any>Relay)[relay]);
  }

  get relay() {
    return (<any>Relay)[this.relayPick];
  }

  relayLabel(relay: string) {
    return RelayStrings.get((<any>Relay)[relay]);
  }
}
