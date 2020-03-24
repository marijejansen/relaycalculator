<template>
  <div class="rel-name">
    <div style="flex:1" :style="{visibility: first ? 'hidden' : 'visible'}">-</div>
    <div style="flex:4">{{name}}</div>
    <span class="tooltip-time">{{time}}</span>
  </div>
</template>



<script lang="ts" src="./single-result-name.ts">
</script>