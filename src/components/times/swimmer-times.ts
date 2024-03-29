import DistanceTime from "../times/distance-time";
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import { Course } from "@/models/course";
import { DistanceWithTime } from "@/models/distance-with-time";
import store from "@/store/index";
import { CourseTimes } from "@/models/coursetimes";
import NameFormatMixin from "@/mixins/name-format-mixin";

@Component({
  components: {
    DistanceTime
  }
})
export default class SwimmerTimes extends Mixins(NameFormatMixin) {
  @Prop()
  private course!: Course;

  private distances: (keyof CourseTimes)[] = [
    "backstroke50M",
    "backstroke100M",
    "breaststroke50M",
    "breaststroke100M",
    "butterfly50M",
    "butterfly100M",
    "freestyle50M",
    "freestyle100M",
    "freestyle200M"
  ];

  @Prop()
  swimmerData!: Swimmer;

  isShortCourse() {
    return this.course == Course.ShortCourse;
  }

  get swimmer() {
    return this.swimmerData;
  }

  get fullName() {
    return this.getFullName(this.swimmer.firstName, this.swimmer.lastName);
  }

  get courseTimes() {
    if (this.swimmerData != null) {
      var courseTimes = this.isShortCourse()
        ? this.swimmerData.shortCourseTimes
        : this.swimmerData.longCourseTimes;
      return courseTimes;
    }
    return null;
  }

  updateSwimmer() {
    var commitName = this.isShortCourse() ? "addSCTimes" : "addLCTimes";
    var courseTimes = this.isShortCourse()
      ? this.swimmerData.shortCourseTimes
      : this.swimmerData.longCourseTimes;
    store.commit(commitName, {
      id: this.swimmerData.id,
      courseTimes: courseTimes
    });
  }

  updateTime(update: DistanceWithTime) {
    this.isShortCourse()
      ? (this.swimmerData.shortCourseTimes[update.distance] = update.time)
      : (this.swimmerData.longCourseTimes[update.distance] = update.time);
    this.updateSwimmer();
  }
}
