<template>
  <div>
    <h2>Search results</h2>
    <div class="results search-result" v-if="searchResult.length > 0">
      <span class="row">
        <div class="name">Name</div>
        <div class="club">Club</div>
        <div class="year">Year</div>
      </span>
      <span
        class="row"
        v-for="swimmer in searchResult"
        :key="swimmer.id"
        @click="selectSwimmer(swimmer.id)"
      >
        <div class="name">{{ swimmer.firstName }} {{ swimmer.lastName }}</div>
        <div class="club">{{ swimmer.clubName }}</div>
        <div class="year">{{ swimmer.birthYear }}</div>
      </span>
    </div>
  </div>
</template>

<script lang="ts" src="./search-results.ts"></script>
