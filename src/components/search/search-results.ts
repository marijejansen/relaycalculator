import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer";
import store from "@/store/index";
import { namespace } from 'vuex-class/lib/bindings';
const search = namespace('search');

@Component
export default class SearchResults extends Vue {

  @search.Getter('getSearchResult')
  private searchResults!: Swimmer[];

  get searchResult() {
    return this.searchResults;
  }

  selectSwimmer(id: number) {
    let swimmer = this.searchResults.find(s => s.id == id);
    store.commit("addToSelectedSwimmers", swimmer);
    this.getTimes(id);
  }

  async getTimes(swimmerId: number) {
    store.dispatch("updateWithTimes", swimmerId);
  }
}
