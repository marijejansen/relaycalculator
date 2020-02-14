<template>
  <div>
    <h2>Selection</h2>
    <div>
            <div class="search-item row results" v-if="selectedSwimmers.length > 0">
        <div class="column col-result name">Name</div>
        <div class="column col-result club">Club</div>
        <div class="column col-result year">Year</div>
      </div>
      <div class="search-item row selection" v-for="swimmer in selectedSwimmers" :key="swimmer.id">
        <div class="column col-result name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
        <div class="column col-result club">{{swimmer.clubName}}</div>
        <div class="column col-result year">{{swimmer.birthYear}}</div>
        <button type="button" @click="removeSwimmer(swimmer.id)">X</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./selected-swimmers.ts">
</script>