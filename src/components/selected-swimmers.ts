import { Component, Vue } from "vue-property-decorator";
import { Swimmer } from "@/models/swimmer"
import store from '@/store';

@Component
export default class SelectedSwimmers extends Vue {
       
	get searchResult() {
        return store.state.searchResult; 
    }
}