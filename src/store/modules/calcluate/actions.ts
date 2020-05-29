import { ActionTree } from "vuex";
import { CalculationState } from "./types";
import { RootState } from "@/store/types";
import root from "../../index";
import { CalculationRequest } from "@/models/calculation-request";
import calculateRepository from "@/repositories/calculate-repository";
import { Swimmer } from '@/models/swimmer';

export const actions: ActionTree<CalculationState, RootState> = {

  calculateBestTeams({ state, commit, getters, rootGetters}) {
    commit('startLoading', null, { root: true })

    let selectedSwimmers = rootGetters.getAllSelected.filter((s: Swimmer) =>
      state.calculationSelection.includes(s.id));
      
    let calculationRequest: CalculationRequest = {
      swimmers: selectedSwimmers,
      relay: getters.getRelay,
      course: getters.getCourse,
    };

    calculateRepository
      .getBestMastersTeams(calculationRequest)
      .then(response => {
        commit('emptyCalculatedTeams');
        response.forEach(team =>
          commit('addToCalculatedTeams', team))
      }
      )
      .then(() => (commit('stopLoading', null, { root: true })));
  },
};
