import { Component, Vue, Watch } from "vue-property-decorator";
import store from '@/store';
import { Swimmer } from '@/models/swimmer';

@Component
export default class SelectedSwimmers extends Vue {

    private selectedSwimmersList: Swimmer[] = [];

	get selectedSwimmers() {
        this.selectedSwimmersList = store.state.selectedSwimmers 
        return this.selectedSwimmersList;
    }

    removeSwimmer(swimmerId: number){
        store.commit('removeFromSelectedSwimmers', swimmerId);
    }
}