import DistanceTime from '../components/distance-time.vue';
import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/swimmer';
import { Course } from '@/models/course';
import { CourseTimes } from '@/models/coursetimes';
import { DistanceWithTime } from '@/models/distance-with-time';
import store from '@/store';

@Component({
    components: {
        DistanceTime
    }
})
export default class SwimmerTimes extends Vue {

    private course: Course = Course.ShortCourse;

    @Prop()
    swimmerData!: Swimmer;

    isShortCourse(){
        return this.course == Course.ShortCourse;
    }

    get swimmer(){
        return this.swimmerData;
    }

    get courseTimes() {
        var swimmer = this.swimmerData;
        if(this.swimmerData != null){
            return this.isShortCourse() ? this.swimmerData.shortCourseTimes : this.swimmerData.longCourseTimes;
        }
    }

    updateSwimmer(){
        var commitName = this.course == Course.ShortCourse ? "addSCTimes" : "addLCTimes";
        store.commit(commitName, {id: this.swimmerData.id, courseTimes: this.swimmerData.shortCourseTimes});
    }

    updateTime(update: DistanceWithTime){
        this.isShortCourse() ? this.swimmerData.shortCourseTimes[update.distance] = update.time : 
            this.swimmerData.shortCourseTimes[update.distance] = update.time;
    this.updateSwimmer();
    }
}