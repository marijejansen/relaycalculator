import { Component, Vue, Watch } from "vue-property-decorator";
import { NameForSearch } from '@/models/name-for-search';
import { RepositoryFactory } from '@/repositories/repositoryfactory';
import store from '@/store';
import { Swimmer } from '@/models/swimmer';
import searchRepository from '@/repositories/search-repository';
import { CourseTimes } from '@/models/coursetimes';
import { UpdateTimesRequest } from '@/models/update-times-request';
import { Course } from '@/models/course';

@Component
export default class SelectedSwimmers extends Vue {

    private selectedSwimmersList: Swimmer[] = [];

    private year: number = 2019;
    private course: Course = Course.ShortCourse;

    private courseTimes: CourseTimes = {
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

    private updateTimeRequest: UpdateTimesRequest = {
        Course: Course.ShortCourse,
        SwimmerId: 0,
    }

	get selectedSwimmers() {
        this.selectedSwimmersList = store.state.selectedSwimmers 
        return this.selectedSwimmersList;
    }

    removeSwimmer(swimmerId: number){
        store.commit('removeFromSelectedSwimmers', swimmerId);
    }
}