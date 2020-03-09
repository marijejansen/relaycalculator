import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Swimmer } from '@/models/swimmer'
import { CourseTimes } from './models/coursetimes';
import { Course } from './models/course';
import searchRepository from './repositories/search-repository';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: Array<Swimmer>(),
    selectedSwimmers: Array<Swimmer>(),
    fromYear: 2020,
  },
  mutations: {
    updateSearchResult(state, searchResult) {
      state.searchResult = searchResult;
    },
    addToSelectedSwimmers(state, swimmer) {
      if (state.selectedSwimmers.find(s => s.id == swimmer.id) == null) {
        //kan dit anders?
        swimmer = { ...swimmer, timesLoaded: false }
        state.selectedSwimmers.push(swimmer);
      }
    },
    removeFromSelectedSwimmers(state, swimmerId) {
      state.selectedSwimmers = state.selectedSwimmers.filter(sw => sw.id !== swimmerId);
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
      var index = state.selectedSwimmers.findIndex(sw => sw.id == swimmerId);
      state.selectedSwimmers[index].timesLoaded = true;
    },
    removeTimesLoaded(state, swimmerId) {
      var index = state.selectedSwimmers.findIndex(sw => sw.id == swimmerId);
      state.selectedSwimmers[index].timesLoaded = false;
    }
  },

  getters: {
    getSearchResult: state => () => {
      return state.searchResult;
    },
    getSelectedById: state => (id: number) => state.selectedSwimmers.find(s => s.id == id),
    getYear: state => state.fromYear,
    timesLoaded: (state, getters) => (swimmerId: number) => {
      var swimmer = getters.getSelectedById(swimmerId);
      return swimmer.timesLoaded;
    }
  },

  actions: {
    updateSelectedWithTimes({ commit, getters }, swimmerId) {
      var year = getters.getYear;
      searchRepository.getShortCourseTimes(swimmerId, year).then((response) => {
        commit('addSCTimes', { id: swimmerId, courseTimes: response });
      })
      .then(() => searchRepository.getLongCourseTimes(swimmerId, year).then((response) => {
          commit('addLCTimes', { id: swimmerId, courseTimes: response });
      }))
      .then(() => this.dispatch('setLoaded', swimmerId))

    },
    //TODO: onnodig?
    setLoaded({ commit, getters }, swimmerId) {
      commit('setTimesLoaded', swimmerId);
    },
    removeLoaded({ commit, getters }, swimmerId) {
      commit('removeTimesLoaded', swimmerId);
    },
  },
});
