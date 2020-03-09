<template>
  <div>
    <div>
      <label>Get times from:</label>
      <select v-model="selectedYear">
        <option v-for="year in years" v-bind:key="year">{{ year }}</option>
      </select>
    </div>

    <div class="search-box">
      <input placeholder="firstname" v-model="search.firstName"/>
      <input placeholder="lastname" v-model="search.lastName"/>
      <button class="search-btn" @click="startSearch()">search</button>
    </div>

    <div>
      <router-link to="view-times">
        <button v-bind:disabled="buttonDisabled" type="button">>> View times</button>
      </router-link>
    </div>

  </div>
</template>




<script lang="ts" src="./search-top.ts">
</script>