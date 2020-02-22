<template>
  <div class="search-item row view">
    <div class="column col-result times-name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
      <!-- <distance-time
        class=""
        v-for="(item, key) in courseTimes"
        :key="swimmer.id + key"
        :distance-with-time="{time: item, distance: key}"
        @update-time="updateTime"
      ></distance-time> -->
            <distance-time
        class=""
        v-for="distance in distances"
        :key="swimmer.id + distance"
        :distance-with-time="{time: courseTimes[distance], distance: distance}"
        @update-time="updateTime"
      ></distance-time>
  </div>
</template>
        

<script lang="ts" src="./swimmer-times.ts">
</script>
