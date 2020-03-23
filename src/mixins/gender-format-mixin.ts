import { Component, Vue } from 'vue-property-decorator'
import { Gender } from '@/models/gender'


@Component
class GenderFormatMixin extends Vue {

    public getGenderShort(gender: Gender): string {
        switch(gender) { 
            case Gender.Female: { 
               return "F";
               break; 
            } 
            case Gender.Male: { 
               return "M";
               break; 
            } 
            case Gender.Mix: { 
                return "X";
                break; 
             } 
            default: { 
               return "unknown" 
               break; 
            } 
         } 
    }
}

export default GenderFormatMixin