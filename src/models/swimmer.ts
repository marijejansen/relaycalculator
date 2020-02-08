import { Gender } from './gender';

export interface Swimmer {
    ID: number,
    FirstName: string,
    LastName: string,
    BirthYear: number,
    Gender: Gender
    ClubName: string,
    ShortCourseTimes: [],
    LongCourseTimes: []
}