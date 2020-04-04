import { Component, Vue } from "vue-property-decorator";
import { Relay, RelayStrings } from "@/models/relay";
import store from "@/store/index";
import { Course } from "@/models/course";
import { namespace } from 'vuex-class';
const calculate = namespace('calculate');

@Component
export default class CalcTop extends Vue {

  @calculate.Getter('getRelay')
  private activeRelay!: Relay;

  @calculate.Getter('getCourse')
  private course!: Course;

  @calculate.Mutation('setRelay')
  private setRelay(relay: Relay) { }

  @calculate.Mutation('setCourse')
  private setCourse(course: Course) { }

  get isShortCourse() {
    return this.course == Course.ShortCourse;
  }

  set isShortCourse(isShort: boolean) {
    let course = isShort ? Course.ShortCourse : Course.LongCourse;
    this.setCourse(course);
  }

  get relays() {
    const values = Object.values(Relay).filter(x => isNaN(Number(x)));
    return values;
  }

  set relay(relay: Relay) {
    this.setRelay((<any>Relay)[relay])
  }

  get relay() {
    return (<any>Relay)[this.activeRelay];
  }

  relayLabel(relay: string) {
    return RelayStrings.get((<any>Relay)[relay]);
  }
}
