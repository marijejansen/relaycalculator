import { MutationTree } from "vuex";
import { SearchState } from "./types";

export const mutations: MutationTree<SearchState> = {

  updateSearchResult(state, searchResult) {
    state.searchResult = searchResult;
  },

  setTimesLoaded(state, swimmerId) {
    if (state.loadedTimes.find(t => t == swimmerId) == null) {
      state.loadedTimes.push(swimmerId);
    }
  },
  removeTimesLoaded: state => (swimmerId: number) => {
    state.loadedTimes = state.loadedTimes.filter(t => t !== swimmerId);
  }
};
