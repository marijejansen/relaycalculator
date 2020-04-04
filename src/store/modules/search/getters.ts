import { SearchState } from "./types";
import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { Swimmer } from '@/models/swimmer';

export const getters: GetterTree<SearchState, RootState> = {
  
  getSearchResult(state) {
    return state.searchResult
  },

  timesLoaded(state) {
    return state.loadedTimes;
  },

  allTimesLoaded: (state, rootGetters) => {
      let selectedSwimmers = rootGetters.getAllSelected;
     
      let allLoaded = selectedSwimmers > 0;
      selectedSwimmers.forEach((swimmer: Swimmer) => {
          if (state.loadedTimes.find(t => t == swimmer.id) == null) {
              allLoaded = false;
          }
      });
      return allLoaded;
  },
};
