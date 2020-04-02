import Vue from "vue";
import Vuex, { StoreOptions, mapGetters } from "vuex";
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
      console.log("updateYear");
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

    removeFromSelectedSwimmers: state => (swimmerId: number) => {
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

    startLoading: state => (state.loading = true),

    stopLoading: state => (state.loading = false)
  },
  actions: {

    updateWithTimes({ commit, getters, dispatch }, swimmerId) {
        var year = getters.getYear;
        searchRepository
          .getShortCourseTimes(swimmerId, year)
          .then(response => {
            commit("addSCTimes", { id: swimmerId, courseTimes: response });
          })
          .then(() =>
            searchRepository
              .getLongCourseTimes(swimmerId, year)
              .then(response => {
                commit("addLCTimes", { id: swimmerId, courseTimes: response });
              })
          )
          .then(() => commit("setTimesLoaded", swimmerId))
          .then(() => dispatch("addToLocalStorage", swimmerId));
      },
    //   addToLocalStorage({}, swimmerId) {
    //     //TODO: naar sessionStorage!
    //     var swimmersStorage = localStorage.getItem(`swimmers`);
    //     var swimmers = swimmersStorage ? JSON.parse(swimmersStorage) : Array();
    //     if (swimmers.find((sw: Swimmer) => sw.id == swimmerId) == null) {
    //       swimmers.push(this.getters.getSelectedById(swimmerId));
    //       localStorage.setItem("swimmers", JSON.stringify(swimmers));
    //     }
    //   },
    //   getFromLocalStorage({}, swimmerId) {
    //     //TODO: naar sessionStorage!
    //     var swimmersStorage = localStorage.getItem("swimmers");
    //     var swimmers = swimmersStorage ? JSON.parse(swimmersStorage) : Array();
    //     var found = swimmers.find((sw: Swimmer) => sw.id == swimmerId);
    //     return found;
    //   },
    //   getAllFromLocalStorage() {
    //     //TODO: naar sessionStorage!
    //     var swimmersStorage = localStorage.getItem("swimmers");
    //     var swimmers = swimmersStorage ? JSON.parse(swimmersStorage) : Array();
    //     swimmers.forEach((swimmer: Swimmer) => {
    //       this.commit("addToSelectedSwimmers", swimmer);
    //       this.commit("setTimesLoaded", swimmer.id);
    //     });
    //   }
  },
  getters: {
    getAllSelected: state => state.selectedSwimmers,

    getSelectedById: state => (id: number) => {
      state.selectedSwimmers.find(s => s.id == id);
    },
    getYear: state => state.fromYear,
    
    isLoading: state => state.loading
  }
};

export default new Vuex.Store<RootState>(store);
