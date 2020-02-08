import { Component, Vue, Watch } from "vue-property-decorator";
import { NameForSearch } from '@/models/name-for-search';
// import searchRepository from "@/repositories/search-repository";
import { Swimmer } from '@/models/swimmer';
import { RepositoryFactory } from '@/repositories/repositoryfactory';
const searchRepository = RepositoryFactory.get('search');


@Component
export default class SearchSwimmers extends Vue {
    
    private searchResult: Swimmer[] = [];

    search: NameForSearch = {
        firstName: "",
        lastName: ""
    }

    @Watch('search')
    async startSearch(){
        await searchRepository.getSearch(this.search.firstName, this.search.lastName).then(response =>
            {
                this.searchResult = response
            });
                    // this.searchResult = response.data);
    }
}