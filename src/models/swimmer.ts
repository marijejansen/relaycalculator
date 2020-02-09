import { Gender } from './gender';

export interface Swimmer {
    id: number,
    firstName: string,
    lastName: string,
    birthYear: number,
    gender: Gender
    clubName: string,
    shortCourseTimes: [],
    longCourseTimes: []
}