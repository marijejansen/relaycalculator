 <template>
 <div>
  <div class="switch-container">
    <div v-bind:class="{active: !isShortCourse}"> long course </div>
    <label class="switch">
      <input type="checkbox" v-model="isShortCourse">
      <span class="slider"></span>
    </label>
    <div v-bind:class="{active: isShortCourse}"> short course </div>

  </div>
  <div class="row results-container">
    <div class="search-item row results">
      <div class="column col-result times-name">Name</div>
      <div class="column col-result times" v-for="distance in distancesShort" v-bind:key="distance" >{{distance}}</div>
    </div>
    <swimmer-times v-for="swimmer in selectedSwimmers" :key="swimmer.id" :swimmer-data="swimmer" :course="course"></swimmer-times>
  </div>
  </div>
</template>

<script lang="ts" src="./times-overview.ts">
</script>
