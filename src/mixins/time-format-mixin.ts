import { Component, Vue } from "vue-property-decorator";

@Component
class TimeFormatMixin extends Vue {
  public toSeconds(time: string): number {
    var split = time.split(/[,:.;]/);
    var length = split.length;

    var mil =
      length <= 1
        ? 0
        : split[length - 1].length == 1
        ? Number(split[length - 1] + "0")
        : Number(split[length - 1]);
    var sec = length === 1 ? Number(split[0]) : Number(split[length - 2]);
    var min = length > 2 ? Number(split[length - 3]) : 0;

    if (length == 2 && time.includes(":")) {
      mil = 0;
      sec = Number(split[1]);
      min = Number(split[0]);
    }

    return min * 60 + sec + mil / 100;
  }

  public toTimeString(time: number): string {
    var secNum = time % 60;
    var sec = this.getSeconds(secNum);
    var min = ((time - secNum) / 60).toString();
    return min != "0" ? `${min}:${sec}` : `${sec}`;
  }

  private getSeconds(num: number): string {
    var number = Number(num.toFixed(2));
    var numString = this.paddStart(number);

    numString.length == 2
      ? (numString += ".00")
      : numString.length == 4
      ? (numString += "0")
      : null;
    return numString;
  }

  private paddStart(num: number): string {
    return num < 10 ? "0" + num : num.toString();
  }
}

export default TimeFormatMixin;
