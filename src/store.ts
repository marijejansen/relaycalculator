import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Swimmer } from '@/models/swimmer'
import searchRepository from './repositories/search-repository';
import { RelayTeam } from './models/relay-team';
import { CalculationRequest } from './models/calculation-request';
import { Stroke } from './models/stroke';
import { Course } from './models/course';
import calculateRepository from './repositories/calculate-repository';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: Array<Swimmer>(),
    selectedSwimmers: Array<Swimmer>(),
    fromYear: 2020,
    loadedTimes: Array<Number>(),
    loading: false,
    calculationSelection: Array<Number>(),
    calculatedTeams: Array<RelayTeam>()
  },
  mutations: {
    updateSearchResult(state, searchResult) {
      state.searchResult = searchResult;
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
      state.selectedSwimmers = state.selectedSwimmers.filter(sw => sw.id !== swimmerId);
      state.loadedTimes = state.loadedTimes.filter(t => t == swimmerId);
    },
    addSCTimes(state, payload) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].shortCourseTimes = payload.courseTimes;
    },
    addLCTimes(state, payload) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].longCourseTimes = payload.courseTimes;
    },
    updateYear(state, year) {
      state.fromYear = year;
    },
    setTimesLoaded(state, swimmerId) {
      if (state.loadedTimes.find(t => t == swimmerId) == null) {
        state.loadedTimes.push(swimmerId);
      }
    },
    removeTimesLoaded(state, swimmerId) {
      state.loadedTimes.filter(t => t == swimmerId);
    },
    isLoading(state){
      state.loading = true;
    },
    stopLoading(state){
      state.loading = false;
    },
    addToSelectedForCalculation(state, swimmerId){
      if (state.calculationSelection.find(s => s == swimmerId) == null) {
        state.calculationSelection.push(swimmerId);
      }
    },
    removeFromSelectedForCalculation(state, swimmerId){
      state.calculationSelection = state.calculationSelection.filter(s => s !== swimmerId)
    },
    getCalculation(state, relayType){
      //TODO: course
      state.loading = true;
      var swimmers = state.selectedSwimmers.filter(s => state.calculationSelection.includes(s.id));
      var calculationRequest: CalculationRequest = {
        swimmers: swimmers,
        relayType: relayType,
        course: Course.ShortCourse
      }
      calculateRepository.getBestTeams(calculationRequest).then(response => 
        state.calculatedTeams = response).then(() => state.loading = false)
    }
  },

  getters: {
    getSearchResult: state => () => {
      return state.searchResult;
    },

    getSelectedById: state => (id: number) => state.selectedSwimmers.find(s => s.id == id),

    getYear: state => state.fromYear,

    timesLoaded: (state, getters) => (swimmerId: number) => {
      return state.loadedTimes.find(t => t == swimmerId) != null;
    },

    allTimesLoaded(state) {
      var allLoaded = state.selectedSwimmers.length > 0;
      state.selectedSwimmers.forEach(swimmer => {
        if (state.loadedTimes.find(t => t == swimmer.id) == null) {
          allLoaded = false;
        }
      });
      return allLoaded;
    },
    isLoading(state){
      return state.loading;
    }
  },

  actions: {
    updateWithTimes({ commit, getters }, swimmerId) {
      var year = getters.getYear;

      this.dispatch('getFromLocalStorage', swimmerId).then((response) => {
        if (response != null && response != undefined) {
          this.commit('addToSelectedSwimmers', response);
          this.commit('setTimesLoaded', swimmerId);
        } else {
          searchRepository.getShortCourseTimes(swimmerId, year).then((response) => {
            commit('addSCTimes', { id: swimmerId, courseTimes: response });
          })
            .then(() => searchRepository.getLongCourseTimes(swimmerId, year).then((response) => {
              commit('addLCTimes', { id: swimmerId, courseTimes: response });
            }))
            .then(() => this.commit('setTimesLoaded', swimmerId))
            .then(() => this.dispatch('addToLocalStorage', swimmerId))
        }
      })
    },
    addToLocalStorage({ }, swimmerId) {
      //TODO: naar sessionStorage!
      var swimmersStorage = localStorage.getItem(`swimmers`);
      var swimmers = swimmersStorage ? JSON.parse(swimmersStorage) : Array();

      if(swimmers.find((sw: Swimmer) => sw.id == swimmerId) == null) {
        swimmers.push(this.getters.getSelectedById(swimmerId));
        localStorage.setItem('swimmers', JSON.stringify(swimmers))
      }
    },
    getFromLocalStorage({ }, swimmerId) {
      //TODO: naar sessionStorage!
      var swimmersStorage = localStorage.getItem('swimmers');
      var swimmers = swimmersStorage ? JSON.parse(swimmersStorage) : Array();
      var found = swimmers.find((sw: Swimmer) => sw.id == swimmerId);
      return found;
    },
    getAllFromLocalStorage(){
      //TODO: naar sessionStorage!
      var swimmersStorage = localStorage.getItem('swimmers');
      var swimmers = swimmersStorage ? JSON.parse(swimmersStorage) : Array();
      swimmers.forEach((swimmer: Swimmer) => { this.commit('addToSelectedSwimmers', swimmer)});
    },
  },
});
