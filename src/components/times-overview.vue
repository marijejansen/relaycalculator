 <template>
  <div class="row results-container">
    <div class="search-item row results">
      <div class="column col-result times-name">Name</div>
      <div class="column col-result times" v-for="distance in distancesShort" v-bind:key="distance" >{{distance}}</div>
    </div>
    <div class="search-item row selection" v-for="swimmer in selectedSwimmers" :key="swimmer.id">
      <div class="column col-result times-name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
      <div class="column col-result times" v-for="(item, key) in courseTimes(swimmer.id)" v-bind:key="swimmer.id + key" >{{item}}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./times-overview.ts">
</script>