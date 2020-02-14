import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer"
import { CourseTimes } from "@/models/coursetimes";
import store from '@/store';

@Component
export default class SearchResults extends Vue {
       
    private searchResults: Swimmer[] = [];

    private swimmer: Swimmer = {
        id: 0,
        firstName: "",
        lastName: "",
        birthYear: 0,
        clubName: "",
        gender: 0,
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
        },
        shortCourseTimes: {
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

	get searchResult() {
        this.searchResults = store.state.searchResult 
        return this.searchResults;
    }

    selectSwimmer(id: number){
        let swimmer = this.searchResults.find(s => s.id == id);
        if(swimmer != null){
            this.swimmer = swimmer;
        }
        store.commit('addToSelectedSwimmers', swimmer);
    }
}