<template>
  <div class="rel-name">
    <div :style="{visibility: first ? 'hidden' : 'visible'}">-</div>
    <div>{{name}}</div>
    <span class="tooltip-time">{{time}}</span>
  </div>
</template>



<script lang="ts" src="./single-result-name.ts">
</script>