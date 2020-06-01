import { Component, Vue, Mixins } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import store from "@/store/index";
import { namespace } from 'vuex-class/lib/bindings';
import localStorageRepo from '@/repositories/storage-repository';
import NameFormatMixin from '@/mixins/name-format-mixin';
const search = namespace('search');

@Component
export default class SearchResults extends Mixins(NameFormatMixin) {

  @search.Getter('getSearchResult')
  private searchResults!: Swimmer[];

  @search.Mutation("setTimesLoaded")
  setTimesLoaded(swimmerId: number){} 

  get searchResult() {
    return this.searchResults;
  }

  selectSwimmer(id: number) {
    let swimmer = this.searchResults.find(s => s.id == id);
    store.commit("addToSelectedSwimmers", swimmer);
    this.getTimes(id);
  }

  fullName(first: string, last: string) {
    return this.getFullName(first, last);
  }

  async getTimes(swimmerId: number) {
    await store.dispatch("updateWithTimes", swimmerId)
      .then(() => {
        this.setTimesLoaded(swimmerId);
      })
      .then(() => {
        const swimmers = store.getters.getAllSelected;
        const swimmer = swimmers.find((sw: Swimmer) => sw.id === swimmerId);
        if(swimmer){
          localStorageRepo.addOrUpdateInLocalStorage(swimmer);
        }
      })
  }
}
