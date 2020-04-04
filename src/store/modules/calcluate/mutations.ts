import { MutationTree } from "vuex";
import { CalculationState } from "./types";
import { Course } from "@/models/course";
import { Relay } from "@/models/relay";
import { RelayTeam } from "@/models/relay-team";

export const mutations: MutationTree<CalculationState> = {
  setCourse: state => (course: Course) => (state.course = course),

  setRelay(state, relay) {
    state.relay = relay
  },

  addToSelectedForCalculation(state, swimmerId){
    if (state.calculationSelection.find(s => s == swimmerId) == null) {
      state.calculationSelection.push(swimmerId);
    }
  },

  removeFromSelectedForCalculation(state, swimmerId) {
    state.calculationSelection = state.calculationSelection.filter(
      s => s !== swimmerId
    );
  },

  addToCalculatedTeams(state, team){
    state.calculatedTeams.push(team);
  },


  emptyCalculatedTeams(state){
    state.calculatedTeams = []
  }
};
