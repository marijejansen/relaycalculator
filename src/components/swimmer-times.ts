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
    swimmerData: Swimmer = {
        firstName: "",
        lastName: "",
        id: 0,
        birthYear: 0,
        gender: 0,
        clubName: "",
        shortCourseTimes: {
            freestyle50M: 0,
            freestyle100M: 0,
            freestyle200M: 0,
            backstroke50M: 0,
            backstroke100M: 0,
            breaststroke50M: 0,
            breaststroke100M: 0,
            butterfly50M: 0,
            butterfly100M: 0,
        },
        longCourseTimes: {
            freestyle50M: 0,
            freestyle100M: 0,
            freestyle200M: 0,
            backstroke50M: 0,
            backstroke100M: 0,
            breaststroke50M: 0,
            breaststroke100M: 0,
            butterfly50M: 0,
            butterfly100M: 0
        }
    };

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