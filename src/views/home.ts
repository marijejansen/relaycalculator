import { Component, Vue } from "vue-property-decorator";
import SearchSwimmers from "@/components/search-swimmers.vue"
import SearchResults from '@/components/search-results.vue';
import SelectedSwimmers from '@/components/selected-swimmers';
import SearchTop from '@/components/search-top';

@Component({
  components: {
    SearchSwimmers, SearchResults, SelectedSwimmers, SearchTop
  }
})
export default class Home extends Vue {}