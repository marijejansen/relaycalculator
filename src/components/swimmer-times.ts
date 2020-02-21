import DistanceTime from '../components/distance-time.vue';
import { Component, Vue, Prop } from "vue-property-decorator";
import { Swimmer } from '@/models/swimmer';
import { Course } from '@/models/course';
import { CourseTimes } from '@/models/coursetimes';

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
}