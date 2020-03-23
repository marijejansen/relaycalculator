import { Swimmer } from './swimmer';
import { Course } from './course';
import { RelayType } from './relay-type';

export interface CalculationRequest {
    swimmers: Swimmer[],
    relayType: RelayType,
    course: Course,
}