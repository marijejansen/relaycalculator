import { MutationTree } from "vuex";
import { CalculationState } from "./types";
import { Course } from "@/models/course";
import { Relay } from "@/models/relay";
import { RelayTeam } from "@/models/relay-team";

export const mutations: MutationTree<CalculationState> = {
  setCourse: state => (course: Course) => (state.course = course),

  setRelay: state => (relay: Relay) => (state.relay = relay),

  addToSelectedForCalculation: state => (swimmerId: number) => {
    if (state.calculationSelection.find(s => s == swimmerId) == null) {
      state.calculationSelection.push(swimmerId);
    }
  },

  addToCalculatedTeams: state => (team: RelayTeam) => {
    state.calculatedTeams.push(team);
  },

  removeFromSelectedForCalculation: state => (swimmerId: number) => {
    state.calculationSelection = state.calculationSelection.filter(
      s => s !== swimmerId
    );
  },

  emptyCalculatedTeams: state => (state.calculatedTeams = [])
};
