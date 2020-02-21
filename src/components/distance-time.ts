import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { DistanceWithTime } from '@/models/distance-with-time';


@Component
export default class DistanceTime extends Vue {
   
    @Prop()
    distanceTime!: number;

    @Prop()
    distanceWithTime!: DistanceWithTime;     
    
    @Emit()
    private updateTime(update: DistanceWithTime) {
    }

    get time(){
        var time = this.distanceWithTime.time;
        return time === 0 ? '' : time.toString();
    }

    set time(newTime: string){
        var numberTime = Number(newTime);
        if(numberTime !== NaN){
            this.distanceWithTime.time = numberTime;
            console.log(this.distanceWithTime.distance + "!" + this.distanceWithTime.time)
            this.updateTime({
                distance: this.distanceWithTime.distance,
                time: this.distanceWithTime.time
            });
        }
    }

    // private mounted(){
    //     this.distTime = this.distanceTime;
    // }

}