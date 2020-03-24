import { Component, Vue, Watch } from "vue-property-decorator";
import store from '@/store';
import { NameForSearch } from '@/models/name-for-search';
import searchRepository from '@/repositories/search-repository';

@Component
export default class SearchTop extends Vue {

  years: number[] = this.getLastYears();

  search: NameForSearch = {
    firstName: "marije",
    lastName: "jansen"
  }

  async startSearch() {
    //TODO: naar store?

    store.commit('isLoading');
    await searchRepository.getSearch(this.search.firstName, this.search.lastName).then(response => {
      store.commit('updateSearchResult', response);
    }).then(() => store.commit('stopLoading'));
  }

  getLastYears() {
    var years: number[] = [];
    var thisYear = Number((new Date()).getFullYear());
    for (var i = 0; i < 4; i++) {
      years.push(thisYear - i);
    }
    return years;
  }

  get selectedYear() {
    return store.state.fromYear;
  }

  set selectedYear(year) {
    store.commit('updateYear', year);
    if (store.state.selectedSwimmers.length > 0) {
      store.state.selectedSwimmers.forEach(swimmer => {
        store.dispatch('updateWithTimes', swimmer.id);
      });
    }
  }
  get buttonDisabled() {
    return false;
    // return !store.getters.allTimesLoaded;
  }

  async loadSwimmers(){
    store.dispatch('getAllFromLocalStorage');
  }

}