import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer"

@Component
export default class SelectedSwimmers extends Vue {
    private testNamen: string[] = [
        'Marije Jansen ZPC Amersfoort 1985 F',
        'IemandAnders met EenHeleLangeNaam ZPC AmersfoortOfzoiets 1985 F',
        'Nog Iemand Zv de Zwemclub 2001 M'
    ]

    private selectedSwimmers!: Swimmer[];

}