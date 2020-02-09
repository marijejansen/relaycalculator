import Vue from "vue";
import Vuex from "vuex";
import {Swimmer} from '@/models/swimmer'
import SearchSwimmers from './components/search-swimmers';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: Array<Swimmer>(),
    selectedSwimmers: Array<Swimmer>()
  },
  mutations: {
    updateSearchResult(state, searchResult){
      state.searchResult = searchResult;
    }
  },
  getters: {
    getSearchResult: (state) => () => {
      return state.searchResult;
    }
  },
  actions: {}
});
