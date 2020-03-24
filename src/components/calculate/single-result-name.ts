import { Component, Vue, Prop, Mixins} from "vue-property-decorator";
import { Swimmer } from '@/models/swimmer';
import NameFormatMixin from '@/mixins/name-format-mixin';
import TimeFormatMixin from '@/mixins/time-format-mixin';


@Component
export default class SingleResultName extends Mixins(NameFormatMixin, TimeFormatMixin) {

    @Prop()
    relaySwimmer!: Swimmer;

    @Prop()
    first!: boolean;

    get swimmer(){
        return this.relaySwimmer;
    }

    get name() {
        return this.nameShort(this.swimmer.firstName, this.swimmer.lastName);
    }

    get time() {
        console.log(this.swimmer.time);
        return this.toTimeString(this.swimmer.time);
    }

}
    