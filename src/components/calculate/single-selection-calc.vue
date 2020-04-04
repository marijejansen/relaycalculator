<template>
  <span class="row" v-bind:class="{ disabled: !select }">
    <label :for="'check_' + swimmer.id">
      <input v-model="select" :id="'check_' + swimmer.id" type="checkbox" />
      <div class="name">{{ name }}</div>
      <div class="gender">{{ gender }}</div>
      <div class="age">{{ 2020 - swimmer.birthYear }}</div>
    </label>
  </span>
</template>

<script lang="ts" src="./single-selection-calc.ts"></script>
