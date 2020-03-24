<template>
  <div>
    <div class="result-col">
      <div class="results names">

        <span class="row">
          <div class="name">Name</div>
          <div class="gender">Gender</div>
          <div class="age">Age</div>
        </span>

        <single-selection-calc v-for="swimmer in selectedSwimmers" :key="swimmer.id" :swimmer-data="swimmer">
        </single-selection-calc>

      </div>
    </div>

    <div class="result-col">
      <div class="results calc">

        <span class="row">
          <div class="age">Age</div>
          <div class="gender">Gender</div>
          <div class="rel-names">Names</div>
          <div class="time">Time</div>
        </span>

        <calc-result v-for="team in relays" :key="team.id" :relay-team="team"></calc-result>

      </div>
    </div>

    <div class="calculate-btn">
      <button @click="calculate()">Calculate</button>
    </div>
    
  </div>
</template>



<script lang="ts" src="./calc-overview.ts">
</script>