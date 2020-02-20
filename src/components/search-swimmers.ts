import { Component, Vue, Watch } from "vue-property-decorator";
import { NameForSearch } from '@/models/name-for-search';
import { RepositoryFactory } from '@/repositories/repositoryfactory';
import store from '@/store';
const searchRepository = RepositoryFactory.get('search');


@Component
export default class SearchSwimmers extends Vue {
    
    search: NameForSearch = {
        firstName: "",
        lastName: ""
    }

    async startSearch(){
        //TODO: naar store?
        await searchRepository.getSearch(this.search.firstName, this.search.lastName).then(response =>
            {
                store.commit('updateSearchResult', response);
            });
    }


    // yearpicker

    //TODO: create array from current year
    years : number[] = [2017, 2018, 2019, 2020];

    get selectedYear() {
        return store.state.fromYear 
    } 
    set selectedYear(year) {
        store.commit('updateYear', year)
    }

    get buttonDisabled() {
        return !(store.state.selectedSwimmers.length > 0);
    }

}