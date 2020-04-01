import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import store from "@/store/index";
import { Course } from "@/models/course";
import SwimmerTimes from "@/components/times/swimmer-times";

@Component({
  components: {
    SwimmerTimes
  }
})
export default class TimesOverview extends Vue {
  private distancesShort: string[] = [
    "50Back",
    "100Back",
    "50Breast",
    "100Breast",
    "50Fly",
    "100Fly",
    "50Free",
    "100Free",
    "200Free"
  ];

  private selectedSwimmersList: Swimmer[] = [];

  private course: Course = Course.ShortCourse;

  get isShortCourse() {
    return this.course == Course.ShortCourse;
  }

  set isShortCourse(isShort: boolean) {
    this.course = isShort ? Course.ShortCourse : Course.LongCourse;
  }

  get selectedSwimmers() {
    this.selectedSwimmersList = store.state.selectedSwimmers;
    return this.selectedSwimmersList;
  }

  courseTimes(swimmerId: number) {
    var swimmer = this.selectedSwimmers.find(
      swimmer => swimmer.id == swimmerId
    );
    if (swimmer != null) {
      return this.isShortCourse
        ? swimmer.shortCourseTimes
        : swimmer.longCourseTimes;
    }
  }
}
