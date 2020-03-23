import { Component, Vue, Prop, Mixins} from "vue-property-decorator";
import NameFormatMixin from "@/mixins/name-format-mixin"
import TimeFormatMixin from "@/mixins/time-format-mixin"

import { RelayTeam } from '@/models/relay-team';
import store from '@/store';
import GenderFormatMixin from '@/mixins/gender-format-mixin';


@Component
export default class CalcResult extends Mixins(NameFormatMixin, TimeFormatMixin, GenderFormatMixin) {

    @Prop()
    private relayTeam!: RelayTeam;


    get team(){
        return this.relayTeam;
    }

    get names(){
        var names = "";
        this.relayTeam.swimmers.forEach(swimmer => {
            if(names != ""){
                names += " - ";
            }
            var formattedName = this.nameShort(swimmer.firstName, swimmer.lastName);
            names += formattedName;        
        });
        return names;
    }

    get time(){
        var time = this.toTimeString(this.team.time);
        return time;
    }

    get gender(){
        return this.getGenderShort(this.team.gender);
    }

}