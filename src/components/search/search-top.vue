<template>
  <div>
    <div>
      <label>Get times since:</label>
      <select v-model="selectedYear">
        <option v-for="year in years" v-bind:key="year">{{ year }}</option>
      </select>
    </div>

    <div>
      <input
        placeholder="firstname"
        v-model="search.firstName"
        v-on:keyup.enter="startSearch()"
      />
      <input
        placeholder="lastname"
        v-model="search.lastName"
        v-on:keyup.enter="startSearch()"
      />
      <button class="search-btn" @click="startSearch()">search</button>
    </div>

    <div>
      <button type="button" @click="loadSwimmers()">+ load swimmers</button>
    </div>
    <div>
      <router-link to="view-times">
        <button v-bind:disabled="buttonDisabled" type="button">
          >> View times
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./search-top.ts"></script>
