 <template>
  <div v-if="dataLoaded" class="row results-container">
    <div class="search-item row results">
      <div class="column col-result times-name">Name</div>
      <div class="column col-result times" v-for="distance in distancesShort" v-bind:key="distance" >{{distance}}</div>
    </div>
    <swimmer-times v-for="swimmer in selectedSwimmers" :key="swimmer.id" :swimmer-data="swimmer"></swimmer-times>
  </div>
</template>

<script lang="ts" src="./times-overview.ts">
</script>
