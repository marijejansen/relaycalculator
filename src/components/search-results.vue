<template>
  <div>
    <h2>Search results</h2>
    <div>

      <div class="search-item row results" v-if="searchResult.length > 0">
        <div class="column col-result name">Name</div>
        <div class="column col-result club">Club</div>
        <div class="column col-result year">Year</div>
      </div>
      <div class="search-item row results" v-for="swimmer in searchResult" :key="swimmer.id" @click="selectSwimmer(swimmer.id)">
        <div class="column col-result name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
        <div class="column col-result club">{{swimmer.clubName}}</div>
        <div class="column col-result year">{{swimmer.birthYear}}</div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" src="./search-results.ts">
</script>