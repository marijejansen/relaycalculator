import { Module } from "vuex";
import { RootState } from "../../types";
import { CalculationState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { RelayTeam } from "@/models/relay-team";
import { Relay } from "@/models/relay";
import { Course } from "@/models/course";

export const state: CalculationState = {
  calculationSelection: Array<Number>(),
  calculatedTeams: Array<RelayTeam>(),
  relay: Relay.Free200,
  course: Course.ShortCourse
};

export const calculate: Module<CalculationState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
