<template>
  <span class="row">
    <div class="name">{{ swimmer.firstName }} {{ swimmer.lastName }}</div>
    <distance-time
      class=""
      v-for="distance in distances"
      :key="swimmer.id + distance"
      :distance-with-time="{ time: courseTimes[distance], distance: distance }"
      @update-time="updateTime"
    ></distance-time>
  </span>
</template>

<script lang="ts" src="./swimmer-times.ts"></script>
