import { Gender } from './gender';
import { Swimmer } from './swimmer';

export interface RelayTeam {
    gender: Gender,
    age: number,
    swimmers: Swimmer[],
    time: number
}