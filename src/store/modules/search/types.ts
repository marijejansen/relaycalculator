import { Swimmer } from "@/models/swimmer";

export interface SearchState {
  searchResult: Array<Swimmer>;
  loadedTimes: Array<Number>;
}
