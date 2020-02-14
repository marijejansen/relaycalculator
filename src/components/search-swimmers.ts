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
}