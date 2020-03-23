import { Component, Vue } from "vue-property-decorator";
import SearchResults from '@/components/search/search-results.vue';
import Selection from '@/components/search/selection.vue';
import SearchTop from '@/components/search/search-top.vue';

@Component({
  components: {
    SearchResults, Selection, SearchTop
  }
})
export default class Home extends Vue {}