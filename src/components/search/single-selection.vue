<template>
  <span class="row" :class="{ loaded: timesLoaded }">
    <div class="name">{{ fullName(swimmer.firstName, swimmer.lastName) }}</div>
    <div class="club">{{ swimmer.clubName }}</div>
    <div class="year">{{ swimmer.birthYear }}</div>
    <div class="remove" @click="removeSwimmer()">X</div>
  </span>
</template>

<script lang="ts" src="./single-selection.ts"></script>

