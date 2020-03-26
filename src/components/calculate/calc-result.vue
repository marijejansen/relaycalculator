<template>
        <span class="row" display: >
          <div class="age">{{team.age}}+</div>
          <div class="gender">{{gender}}</div>
          <div class="names" style="display:flex">
            <single-result-name v-for="(swimmer, index) in swimmers" :key='swimmer.id + "-" + index'  :relay-swimmer="swimmer" :first="index == 0" style="flex:1; display:flex"></single-result-name>
          </div>
          <div class="time">{{time}}</div>
        </span>
</template>

<script lang="ts" src="./calc-result.ts">
</script>