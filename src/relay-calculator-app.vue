<template>
  <div id="app">
    <header></header>
    <router-view />

    <!-- //loader -->
    <div class="overlay" v-bind:class="{ loading: isLoading }">
      <div class="load-container">
        <div class="loader"></div>
        <div class="loader"></div>
      </div>
    </div>
    <!-- - -  -->
  </div>
</template>

<script lang="ts" src="./relay-calculator-app.ts"></script>
