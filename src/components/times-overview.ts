import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from '@/models/swimmer';
import store from '@/store';
import { Course } from '@/models/course';
import SwimmerTimes from '@/components/swimmer-times'

@Component({
    components: {
        SwimmerTimes
    }
})export default class TimesOverview extends Vue {

    private distancesShort: string[] = ["50Free", "100Free", "200Free", "50Back", "100Back", "50Breast", "100Breast", "50Fly", "100Fly"];

    private selectedSwimmersList: Swimmer[] = [];

    private course: Course = Course.ShortCourse;

    isShortCourse(){
        return this.course == Course.ShortCourse;
    }

    get selectedSwimmers() {
        this.selectedSwimmersList = store.state.selectedSwimmers;
        // this.selectedSwimmersList.forEach(swimmer => {
        //     Object.keys(swimmer.shortCourseTimes).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
        // });
        return this.selectedSwimmersList;
    }

    courseTimes(swimmerId: number) {
        var swimmer = this.selectedSwimmers.find(swimmer => swimmer.id == swimmerId);
        if(swimmer != null){
            return this.isShortCourse() ? swimmer.shortCourseTimes : swimmer.longCourseTimes;
        }
    }
}