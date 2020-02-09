import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer"
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
        longCourseTimes: [],
        shortCourseTimes: []

    };

	get searchResult() {
        this.searchResults = store.state.searchResult 
        return this.searchResults;
    }

    selectSwimmer(id: number){
        console.log(id);
        console.log(this.searchResults);
        let swimmer = this.searchResults.find(s => s.id == id);
        console.log(swimmer);
        if(swimmer != null){
            this.swimmer = swimmer;
        }
        store.commit('addToSelectedSwimmers', swimmer);
    }
}