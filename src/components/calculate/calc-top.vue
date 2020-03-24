<template>
  <div>
    <div>
      <router-link to="/view-times">
        <button>&lt;&lt; Back to times</button>
      </router-link>
    </div>
    <div>
      <button type="button">LongCourse</button>
    </div>

    <div class="relay-type">
      <div>Relay type: </div>
      <select v-model="relay">
        <option v-for="relay in relays" :key="relay">{{relay}}</option>
      </select>
      <!-- <select>
        <option>4 x 50 Freestyle</option>
        <option>4 x 100 Freestyle</option>
        <option>4 x 200 Freestyle</option>
        <option>4 x 50 Medley</option>
        <option>4 x 100 Medley</option>
      </select> -->
    </div>
  </div>
</template>



<script lang="ts" src="./calc-top.ts">
</script>