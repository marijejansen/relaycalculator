import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { search } from "./modules/search";
import { calculate } from "./modules/calcluate";
import { Swimmer } from "@/models/swimmer";
import { RootState } from "./types";
import searchRepository from '@/repositories/search-repository';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    search,
    calculate
  },

  state: {
    selectedSwimmers: Array<Swimmer>(),
    loading: false,
    fromYear: new Date().getFullYear() - 1,
  },

  mutations: {

    updateYear(state, year) {
      state.fromYear = year;
    },

    addToSelectedSwimmers(state, swimmer) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == swimmer.id);
      if (index != -1) {
        state.selectedSwimmers[index] = swimmer;
      } else {
        state.selectedSwimmers.push(swimmer);
      }
    },

    removeFromSelectedSwimmers(state, swimmerId) {
      state.selectedSwimmers = state.selectedSwimmers.filter(
        sw => sw.id !== swimmerId
      );
    },

    addSCTimes(state, payload) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].shortCourseTimes = payload.courseTimes;
    },

    addLCTimes(state, payload) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].longCourseTimes = payload.courseTimes;
    },

    addToLocalStorage(state) {
      const swimmers = state.selectedSwimmers;
      swimmers.map(sw => {sw.longCourseTimes == undefined; sw.shortCourseTimes = undefined;})
      localStorage.setItem("swimmers",JSON.stringify(swimmers));
    },

    startLoading: state => (state.loading = true),

    stopLoading: state => (state.loading = false)
  },

  actions: {

    async updateWithTimes({ commit, getters }, swimmerId) {
      var year = getters.getYear;

      await searchRepository.getShortCourseTimes(swimmerId, year)
        .then((response) => {
          commit("addSCTimes", { id: swimmerId, courseTimes: response })
        });

      await searchRepository.getLongCourseTimes(swimmerId, year)
        .then((response) => {
          commit("addLCTimes", { id: swimmerId, courseTimes: response });
        });
    }
  },
  
  getters: {
    getAllSelected(state){
      return state.selectedSwimmers
    },

    getYear(state) {
      return state.fromYear;
    },

    isLoading(state) {
      return state.loading
    } 
  }
};

export default new Vuex.Store<RootState>(store);
