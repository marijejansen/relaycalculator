import { ActionTree } from "vuex";
import { SearchState } from "./types";
import { RootState } from "@/store/types";
import searchRepository from '@/repositories/search-repository';

export const actions: ActionTree<SearchState, RootState> = {

    async getSearchResults({ state, commit, getters, rootGetters, rootState }, payload) {
        commit('startLoading', null, { root: true })
        await searchRepository
            .getSearch(payload.firstName, payload.lastName)
            .then(response => {
                commit('updateSearchResult', response)
            })
            .then(() => commit('stopLoading', null, { root: true })
            );
    }

};
