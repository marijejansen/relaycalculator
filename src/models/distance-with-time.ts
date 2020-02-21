import { CourseTimes } from './coursetimes';

export interface DistanceWithTime{
    distance: keyof CourseTimes,
    time: number
}