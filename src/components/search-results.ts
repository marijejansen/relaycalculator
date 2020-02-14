import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer"
import { CourseTimes } from "@/models/coursetimes";
import store from '@/store';
import { UpdateTimesRequest } from '@/models/update-times-request';
import { Course } from '@/models/course';

@Component
export default class SearchResults extends Vue {
       
    private searchResults: Swimmer[] = [];

	get searchResult() {
        this.searchResults = store.state.searchResult 
        return this.searchResults;
    }

    selectSwimmer(id: number){
        let swimmer = this.searchResults.find(s => s.id == id);
        store.commit('addToSelectedSwimmers', swimmer);
        this.getTimes(id);
    }

    async getTimes(swimmerId: number){
        var updateTimeRequest: UpdateTimesRequest = {
            SwimmerId: swimmerId,
            Course: Course.ShortCourse,
        }
        store.dispatch('updateSelectedWithTimes', updateTimeRequest);
        updateTimeRequest.Course = Course.LongCourse
        store.dispatch('updateSelectedWithTimes', updateTimeRequest);
    }
}