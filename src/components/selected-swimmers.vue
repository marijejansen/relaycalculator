<template>
<div>
<b-list-group>
  <b-list-group-item v-for="swimmer in searchResult" :key="swimmer.id">
    {{swimmer.firstName}} {{swimmer.lastName}} - {{swimmer.clubName}} : {{swimmer.birthYear}}  
    </b-list-group-item>
</b-list-group>
</div>
</template>


<script lang="ts" src="./selected-swimmers.ts">
</script>