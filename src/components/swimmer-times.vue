<template>
  <div class="search-item row view">
    <div class="column col-result times-name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
      <distance-time
        class=""
        v-for="(item, key) in courseTimes"
        :key="swimmer.id + key"
        :distance-time="item"
      ></distance-time>
  </div>
</template>
        

<script lang="ts" src="./swimmer-times.ts">
</script>
