import { Component, Vue } from "vue-property-decorator";
import { Gender } from "@/models/gender";

@Component
class GenderFormatMixin extends Vue {
  public getGenderShort(gender: Gender): string {
    switch (gender) {
      case Gender.Female: {
        return "F";
      }
      case Gender.Male: {
        return "M";
      }
      case Gender.Mix: {
        return "X";
      }
      default: {
        return "unknown";
      }
    }
  }
}

export default GenderFormatMixin;
