import { Swimmer } from "@/models/swimmer";
import { Module } from "vuex";
import { RootState } from "../../types";
import { SearchState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const state: SearchState = {
  searchResult: Array<Swimmer>(),
  loadedTimes: Array<Number>()
};

export const search: Module<SearchState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
