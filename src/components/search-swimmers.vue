<template>
  <div>
    <div class="container search">
      <div class="row">
        <div class="column col-2 search-label">
          <label>First name:</label>
        </div>
        <div class="column col-2">
          <input v-model="search.firstName">
        </div>
      </div>
      <div class="row">
        <div class="column col-2 search-label">
          <label>Last name:</label>
        </div>
        <div class="column col-2">
          <input v-model="search.lastName">
        </div>
      </div>
      
    <button class="button search-btn" type="button" @click="startSearch()">Search</button>
    </div>
  </div>
</template>


<script lang="ts" src="./search-swimmers.ts">
</script>