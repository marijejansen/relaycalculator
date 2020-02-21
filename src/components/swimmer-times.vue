<template>
  <div class="search-item row view">
    <div class="column col-result times-name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
    <div v-if="true">
      <distance-time
        class="column col-result times"
        v-for="item in courseTimes"
        :key="swimmer.id + item"
        :distance-time="item"
      ></distance-time>
    </div>
    <!-- <div v-if="false">
    <distance-time
      
      class="column col-result times"
      v-for="(item, key) in swimmer.longCourseTimes"
      :key="swimmer.id + key"
      :distance-time="item"
    ></distance-time>
    </div> -->
  </div>
</template>
        

<script lang="ts" src="./swimmer-times.ts">
</script>
