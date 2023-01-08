<template>
  <div id="app">
    <header>
      <div>Masters swimming relay calculator</div>
      <button @click="getData()" class="zpc-button"><img src="./assets/zpc-logo.svg" width="40px"/></button>
    </header>
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
