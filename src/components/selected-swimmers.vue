<template>
<div>
<b-list-group>
  <b-list-group-item v-for="naam in testNamen" :key="naam">{{naam}}</b-list-group-item>
  <!-- <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
  <b-list-group-item>Morbi leo risus</b-list-group-item>
  <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
  <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
</b-list-group>
</div>
</template>


<script lang="ts" src="./selected-swimmers.ts">
</script>