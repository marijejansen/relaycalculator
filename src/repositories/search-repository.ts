import baseRepository from "./base-repository";
import { Swimmer } from "@/models/swimmer";
import { CourseTimes } from "@/models/coursetimes";

export default {
  async getSearch(firstName: string, lastName: string): Promise<Swimmer[]> {
    return baseRepository
      .get(
        `/SwimmerData/searchSwimmers?firstName=${firstName}&lastName=${lastName}`
      )
      .then(response => {
        return response.data;
      });
  },

  async getShortCourseTimes(
    swimmerId: number,
    fromYear: number
  ): Promise<CourseTimes> {
    return baseRepository
      .get(
        `/SwimmerData/getTimesShortCourse?id=${swimmerId}&fromYear=${fromYear}`
      )
      .then(response => {
        return response.data;
      });
  },

  async getLongCourseTimes(
    swimmerId: number,
    fromYear: number
  ): Promise<CourseTimes> {
    return baseRepository
      .get(
        `/SwimmerData/getTimesLongCourse?id=${swimmerId}&fromYear=${fromYear}`
      )
      .then(response => {
        return response.data;
      });
  }
};
