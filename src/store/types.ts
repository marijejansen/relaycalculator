import { Swimmer } from "@/models/swimmer";

export interface RootState {
  selectedSwimmers: Array<Swimmer>;
  loading: boolean;
  fromYear: number;
}
