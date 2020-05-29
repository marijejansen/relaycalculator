import { Swimmer } from "./swimmer";
import { Course } from "./course";
import { Relay } from "./relay";

export interface CalculationRequest {
  swimmers: Swimmer[];
  relay: Relay;
  course: Course;
  calculateForYear: number;
}
