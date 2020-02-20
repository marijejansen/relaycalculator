import { Component, Vue } from "vue-property-decorator";
import TimesOverview from "../components/times-overview"


@Component({
    components: {
        TimesOverview
    }
})
export default class ViewTimes extends Vue { }