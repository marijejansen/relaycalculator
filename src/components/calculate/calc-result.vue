<template>
        <span class="row" >
          <div class="age">{{team.age}}+</div>
          <div class="gender">{{gender}}</div>
          <div class="rel-names" style="display:flex">
<!-- 
            <div class="rel-name" v-for="(swimmer, index) in swimmers" :key="swimmer.id" style="flex:1; display:flex">
              <div style="flex:1" :style="{visibility: index == 0 ? 'hidden' : 'visible'}">-</div> 
              <div style="flex:4">{{swimmer.firstName}}</div>
              <span class="tooltip-time">{{swimmer.time}}</span>
            </div> -->

            <single-result-name v-for="(swimmer, index) in swimmers" :key='swimmer.id + "-" + index'  :relay-swimmer="swimmer" :first="index == 0" style="flex:1; display:flex"></single-result-name>
          </div>
          <div class="time">{{time}}</div>
        </span>
</template>

<script lang="ts" src="./calc-result.ts">
</script>