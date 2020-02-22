import DistanceTime from '../components/distance-time.vue';
import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/swimmer';
import { Course } from '@/models/course';
import { DistanceWithTime } from '@/models/distance-with-time';
import store from '@/store';
import { CourseTimes } from '@/models/coursetimes';

@Component({
    components: {
        DistanceTime
    }
})
export default class SwimmerTimes extends Vue {

    private course: Course = Course.ShortCourse;

    private distances: (keyof CourseTimes)[] = ['backstroke50M', "backstroke100M", "breaststroke50M", "breaststroke100M", 
        "butterfly50M", "butterfly100M", "freestyle50M", "freestyle100M", "freestyle200M"]

    @Prop()
    swimmerData!: Swimmer;

    isShortCourse() {
        return this.course == Course.ShortCourse;
    }

    get swimmer() {
        return this.swimmerData;
    }

    get courseTimes() {
        var swimmer = this.swimmerData;
        if (this.swimmerData != null) {
            var courseTimes = this.isShortCourse() ? this.swimmerData.shortCourseTimes : this.swimmerData.longCourseTimes;
            return courseTimes;
        }
    }

    updateSwimmer() {
        var commitName = this.course == Course.ShortCourse ? "addSCTimes" : "addLCTimes";
        store.commit(commitName, { id: this.swimmerData.id, courseTimes: this.swimmerData.shortCourseTimes });
    }

    updateTime(update: DistanceWithTime) {
        this.isShortCourse() ? this.swimmerData.shortCourseTimes[update.distance] = update.time :
            this.swimmerData.shortCourseTimes[update.distance] = update.time;
        this.updateSwimmer();
    }
}