<template>
  <div>
    <h2>Selection</h2>
    <div class="results selected">
      <span class="row" v-if="selectedSwimmers.length > 0">
        <div class="name">Name</div>
        <div class="club">Club</div>
        <div class="year">Year</div>
        <div class="remove" style="visibility:hidden;">&#10006;</div>
      </span>

      <single-selection
        v-for="swimmer in selectedSwimmers"
        :key="swimmer.id"
        :swimmer-data="swimmer"
      ></single-selection>
    </div>
  </div>
</template>

<script lang="ts" src="./selection.ts"></script>
