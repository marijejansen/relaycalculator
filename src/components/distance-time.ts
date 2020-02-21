import { Component, Vue, Prop } from "vue-property-decorator";


@Component
export default class DistanceTime extends Vue {
   
    @Prop()
    distanceTime: number = 0;
    
    // private distTime: number = 0;

    get time(){
        // var time = this.distanceTime;
        // return time === 0 ? '' : time.toString();
        return this.distanceTime;
    }

    // set time(newTime: string){
    //     var numberTime = Number(newTime);
    //     if(numberTime !== NaN){
    //         this.distanceTime = numberTime;
    //     }
    // }

    // private mounted(){
    //     this.distTime = this.distanceTime;
    // }

}