import { Component, Vue, Watch } from "vue-property-decorator";
import { NameForSearch } from "@/models/name-for-search";
import { namespace } from 'vuex-class';
import { Swimmer } from '@/models/swimmer';
import store from '@/store/index';
const search = namespace('search');

@Component
export default class SearchTop extends Vue {

  private years: number[] = this.getLastYears();

  private search: NameForSearch = {
    firstName: "marije ",
    lastName: "jansen"
  };

  private year: number = store.getters.getYear;

  private updateYear(year: number) {
    store.commit('updateYear', year)
  }

  @search.Mutation('removeTimesLoaded')
  private removeTimesLoaded(id: number) { }

  @search.Mutation("setTimesLoaded")
  private setTimesLoaded(id: number) { }

  @search.Mutation('updateSearchResult')
  private updateSearch(swimmers: Swimmer[]) { }

  @search.Action('getSearchResults')
  async getSearchResults(nameForSearch: NameForSearch) { }

  private startSearch() {
    this.getSearchResults(this.search)
  }

  getLastYears() {
    var years: number[] = [];
    var thisYear = Number(new Date().getFullYear());
    for (var i = 0; i < 4; i++) {
      years.push(thisYear - i);
    }
    return years;
  }

  get selectedYear() {
    return this.year;
  }

  set selectedYear(year) {
    this.updateYear(year);
    this.updateTimes();
  }

  private async updateTimes() {
    const swimmers = store.getters.getAllSelected;
    if (swimmers.length > 0) {
      swimmers.forEach((swimmer: Swimmer) => {
        this.removeTimesLoaded(swimmer.id);
        store.dispatch("updateWithTimes", swimmer.id).then(() => {
          this.setTimesLoaded(swimmer.id)
        })
      });
    }
  }

  get buttonDisabled() {
    return false;
    // return !store.getters.allTimesLoaded;
  }

  //TODO: dit toevoegen
  async loadSwimmers() {
    // store.dispatch("getAllFromLocalStorage");
  }
}
