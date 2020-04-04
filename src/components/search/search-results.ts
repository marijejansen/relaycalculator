import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import store from "@/store/index";
import { namespace } from 'vuex-class/lib/bindings';
import localStorageRepo from '@/repositories/storage-repository';
const search = namespace('search');

@Component
export default class SearchResults extends Vue {

  @search.Getter('getSearchResult')
  private searchResults!: Swimmer[];

  get searchResult() {
    return this.searchResults;
  }

  @search.Mutation("setTimesLoaded")
  setTimesLoaded(swimmerId: number){}
  

  selectSwimmer(id: number) {
    let swimmer = this.searchResults.find(s => s.id == id);
    store.commit("addToSelectedSwimmers", swimmer);
    var swimmerList: Swimmer[] = [];
    if(swimmer){
      swimmerList.push(swimmer);
      localStorageRepo.addToLocalStorage(swimmer);
    }
    this.getTimes(id);
  }

  async getTimes(swimmerId: number) {
    await store.dispatch("updateWithTimes", swimmerId)
      .then(() => {
        this.setTimesLoaded(swimmerId);
      })
  }
}
