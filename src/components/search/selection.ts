import { Component, Vue, Watch } from "vue-property-decorator";
import SingleSelection from '@/components/search/single-selection.vue'
import store from '@/store';
import { Swimmer } from '@/models/swimmer';

@Component({components: {SingleSelection}})
export default class Selection extends Vue {

    private selectedSwimmersList: Swimmer[] = [];

    get selectedSwimmers() {
        this.selectedSwimmersList = store.state.selectedSwimmers
        return this.selectedSwimmersList;
    }
}