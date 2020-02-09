<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <label>First name:</label>
        </div>
        <div class="col-md-6">
          <input v-model="search.firstName" placeholder="Enter first name">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label>Last name:</label>
        </div>
        <div class="col-md-6">
          <input v-model="search.lastName" placeholder="Enter last name">
        </div>
      </div>
    </div>
    <button class="button search" type="button" @click="startSearch()">Search</button>
  </div>
</template>


<script lang="ts" src="./search-swimmers.ts">
</script>