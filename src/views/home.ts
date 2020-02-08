import { Component, Vue } from "vue-property-decorator";
import SearchSwimmers from "@/components/search-swimmers.vue"
import SelectedSwimmers from '@/components/selected-swimmers.vue';

@Component({
  components: {
    SearchSwimmers, SelectedSwimmers
  }
})
export default class Home extends Vue {}