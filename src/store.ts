import Vue from "vue";
import Vuex, { Store } from "vuex";
import {Swimmer} from '@/models/swimmer'
import SearchSwimmers from './components/search-swimmers';
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
    updateSearchResult(state, searchResult){
      state.searchResult = searchResult;
    },
    addToSelectedSwimmers(state, swimmer){
      if(state.selectedSwimmers.find(s => s.id == swimmer.id) == null){
        state.selectedSwimmers.push(swimmer);
      }
    },
    removeFromSelectedSwimmers(state, swimmerId){
      state.selectedSwimmers = state.selectedSwimmers.filter(sw => sw.id !== swimmerId);    
    },
    addSCTimes(state, payload){
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].shortCourseTimes = payload.courseTimes;
    },
    addLCTimes(state, payload){
      var index = state.selectedSwimmers.findIndex(sw => sw.id == payload.id);
      state.selectedSwimmers[index].longCourseTimes = payload.courseTimes;
    },
    updateYear(state, year){
      state.fromYear = year;
    }
  },
  getters: {
    getSearchResult: state => () => {
      return state.searchResult;
    },
    getSelectedById: state => (id: number) => state.selectedSwimmers.find(s => s.id == id),
    getYear: state => state.fromYear
  },
  actions: {
    updateSelectedWithTimes({ commit, getters }, payload){
      var year = getters.getYear;
      if(payload.Course == Course.ShortCourse){
              return searchRepository.getShortCourseTimes(payload.SwimmerId, year).then((response) => {
              commit('addSCTimes', {id: payload.SwimmerId, courseTimes: response});
              })
      } else {
        return searchRepository.getLongCourseTimes(payload.SwimmerId, year).then((response) => {
          commit('addLCTimes', {id: payload.SwimmerId, courseTimes: response});
          })
      }
    }
  }
});
