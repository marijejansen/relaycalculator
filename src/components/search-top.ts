import { Component, Vue, Watch } from "vue-property-decorator";
import SearchSwimmers from "@/components/search-swimmers.vue"

@Component({
    components: {
      SearchSwimmers
    }
  })
export default class SearchTop extends Vue {}