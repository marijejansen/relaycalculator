import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { DistanceWithTime } from '@/models/distance-with-time';


@Component
export default class DistanceTime extends Vue {
   
    private stringTime: string = "";

    @Prop()
    distanceTime!: number;

    @Prop()
    distanceWithTime!: DistanceWithTime;     
    
    @Emit()
    private updateTime(update: DistanceWithTime) {
    }

    get time(){
        var time = this.distanceWithTime.time;
        return time === 0 ? '' : this.toTimeString(time);
    }

    set time(newTime: string){
        this.stringTime = newTime;
    }

    setTime(){
        var numberTime = this.toSeconds(this.stringTime);
        if(numberTime !== NaN){
            this.distanceWithTime.time = numberTime;
            console.log(this.distanceWithTime.distance + "!" + this.distanceWithTime.time)
            this.updateTime({
                distance: this.distanceWithTime.distance,
                time: this.distanceWithTime.time
            });
        }
    }

    private toSeconds(time: string){
        var split = time.split(/[,:.;]/);
        var length = split.length;

        var mil = Number(split[length-1]);
        var sec = Number(split[length-2]);
        var min = length > 2 ? Number(split[length-3]) : 0;

        return(min*60+sec+mil/100);       
    }

    private toTimeString(time: number){
        var secNum = (time % 60);
        var sec = this.paddStart(Number(secNum.toFixed(2)));
        var min = this.paddStart((time - secNum) / 60);
        return `${min}:${sec}`;
    }

    private paddStart(num: number) : string{
        return (num < 10) ? ("0" + num) : num.toString();
    }
}