import { Component, Vue } from "vue-property-decorator";
import SearchSwimmers from "@/components/search-swimmers.vue"
import SearchResults from '@/components/search-results.vue';
import SelectedSwimmers from '@/components/selected-swimmers';

@Component({
  components: {
    SearchSwimmers, SearchResults, SelectedSwimmers
  }
})
export default class Home extends Vue {}