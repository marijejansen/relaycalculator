import { RelayTeam } from "@/models/relay-team";
import { Relay } from "@/models/relay";
import { Course } from "@/models/course";

export interface CalculationState {
  calculationSelection: Array<Number>;
  calculatedTeams: Array<RelayTeam>;
  relay: Relay;
  course: Course;
}
