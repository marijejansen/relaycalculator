import { Component, Vue, Prop, Emit, Mixins } from "vue-property-decorator";
import { DistanceWithTime } from "@/models/distance-with-time";
import TimeFormatMixin from '@/mixins/time-format-mixin';

@Component
export default class DistanceTime extends Mixins(
  TimeFormatMixin
) {
  
  private tempTime: number = 0;

  @Prop()
  distanceWithTime!: DistanceWithTime;

  @Emit()
  private updateTime(update: DistanceWithTime) {}

  get time() {
    var time = this.distanceWithTime.time;
    return time === 0 ? "" : this.toTimeString(time);
  }

  set time(newTime: string) {
    if (newTime != "") {
      this.tempTime = this.toSeconds(newTime);
    }
  }

  setTime() {
    var numberTime = this.tempTime;
    if (!isNaN(numberTime) && numberTime != 0 && numberTime !== this.distanceWithTime.time) {
      this.distanceWithTime.time = numberTime;
      this.updateTime({
        distance: this.distanceWithTime.distance,
        time: this.distanceWithTime.time
      });
    }
  }
}
