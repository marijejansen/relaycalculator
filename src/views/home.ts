import { Component, Vue } from "vue-property-decorator";
import SearchResults from '@/components/search-results.vue';
import Selection from '@/components/selection.vue';
import SearchTop from '@/components/search-top';

@Component({
  components: {
    SearchResults, Selection, SearchTop
  }
})
export default class Home extends Vue {}