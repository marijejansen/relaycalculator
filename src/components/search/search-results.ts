import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer"
import store from '@/store';

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
        store.dispatch('updateWithTimes', swimmerId);
    }
}