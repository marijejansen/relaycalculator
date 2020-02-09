<template>
<div>
<b-list-group>
  <b-list-group-item class="search-item" v-for="swimmer in searchResult" :key="swimmer.id" @click="selectSwimmer(swimmer.id)">
    {{swimmer.firstName}} {{swimmer.lastName}} - {{swimmer.clubName}} : {{swimmer.birthYear}}  
    </b-list-group-item>
</b-list-group>
</div>
</template>


<script lang="ts" src="./search-results.ts">
</script>