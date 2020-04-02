import { CalculationState } from "./types";
import { RootState } from "@/store/types";
import { GetterTree } from "vuex";

export const getters: GetterTree<CalculationState, RootState> = {
  getRelay: state => state.relay,

  getCourse: state => state.course,

  getCalculationSelection: state => state.calculationSelection,

  getCalculatedTeams: state => state.calculatedTeams,

  isSelected: state => (id: number) => {
    return state.calculationSelection.find(t => t == id) != null;
  }
};
