import { RelayTeam } from "@/models/relay-team";
import { Relay } from "@/models/relay";
import { Course } from "@/models/course";

export interface CalculationState {
  calculationSelection: Array<number>;
  calculatedTeams: Array<RelayTeam>;
  relay: Relay;
  course: Course;
  calculateForYear: number;
}
