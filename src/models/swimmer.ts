import { Gender } from './gender';
import { CourseTimes } from './coursetimes';

export interface Swimmer {
    id: number,
    firstName: string,
    lastName: string,
    birthYear: number,
    gender: Gender
    clubName: string,
    shortCourseTimes: CourseTimes,
    longCourseTimes: CourseTimes,
}
