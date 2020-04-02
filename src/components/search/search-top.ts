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
    firstName: "",
    lastName: ""
  };

  private year: number = store.getters.getYear;

  private updateYear(year: number) {
    store.commit('updateYear', year)
  }

  @search.Mutation('updateSearchResult')
  private updateSearch(swimmers: Swimmer[]) {}

  @search.Action('getSearchResults')
  async getSearchResults(nameForSearch: NameForSearch){}

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

    //TODO: naar kijken
    if (store.state.selectedSwimmers.length > 0) {
      store.state.selectedSwimmers.forEach(swimmer => {
        store.commit("removeTimesLoaded", swimmer.id);
      });
      store.state.selectedSwimmers.forEach(swimmer => {
        store.dispatch("updateWithTimes", swimmer.id);
      });
    }
  }

  get buttonDisabled() {
    return false;
    // return !store.getters.allTimesLoaded;
  }

  //TODO: dit toevoegen
  async loadSwimmers() {
    store.dispatch("getAllFromLocalStorage");
  }
}
