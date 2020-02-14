<template>
  <div class="row">
    <div class="column col-3 container">
      <div class="yearPicker">
<label>Get times from: </label>
      <select v-model="selectedYear">

        <option v-for="year in years" v-bind:key="year">
    {{ year }}
  </option>

      </select>
</div>
    </div>
    <div class="column col-3 container search">
      <div class="row">
        <div class="column col-2 search-label">
          <label>First name:</label>
        </div>
        <div class="column col-2">
          <input v-model="search.firstName" />
        </div>
      </div>
      <div class="row">
        <div class="column col-2 search-label">
          <label>Last name:</label>
        </div>
        <div class="column col-2">
          <input v-model="search.lastName" />
        </div>
      </div>

      <button class="button search-btn" type="button" @click="startSearch()">Search</button>
    </div>
    <div class="column col-3 container"></div>
  </div>
</template>


<script lang="ts" src="./search-swimmers.ts">
</script>