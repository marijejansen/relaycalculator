import { CalculationState } from "./types";
import { RootState } from "@/store/types";
import { GetterTree } from "vuex";
import { Course } from '@/models/course';
import { Relay } from '@/models/relay';
import { RelayTeam } from '@/models/relay-team';

export const getters: GetterTree<CalculationState, RootState> = {

  getRelay(state): Relay {
    return state.relay;
  },

  getCourse(state): Course {
    return state.course
  },

  getCalculationSelection(state): number[] {
    return state.calculationSelection
  },

  getCalculatedTeams(state): RelayTeam[] {
    return state.calculatedTeams
  },
  
};
