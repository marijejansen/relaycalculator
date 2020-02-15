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

	get selectedSwimmers() {
        this.selectedSwimmersList = store.state.selectedSwimmers 
        return this.selectedSwimmersList;
    }

    removeSwimmer(swimmerId: number){
        store.commit('removeFromSelectedSwimmers', swimmerId);
    }
}