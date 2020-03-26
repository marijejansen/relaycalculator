<template>
  <div class="page-top">
    <div>
      <router-link to="/view-times">
        <button>&lt;&lt; Back to times</button>
      </router-link>
    </div>

    <div class="switch-container">
      <div v-bind:class="{ active: !isShortCourse }">long course</div>
      <label class="switch">
        <input type="checkbox" v-model="isShortCourse" />
        <span class="slider"></span>
      </label>
      <div v-bind:class="{ active: isShortCourse }">short course</div>
    </div>

    <div class="relay-type">
      <label>Relay type: </label>
      <select v-model="relay" :value="relayLabel(relay)">
        <option
          v-for="thisRelay in relays"
          :key="thisRelay"
          :value="thisRelay"
          >{{ relayLabel(thisRelay) }}</option
        >
      </select>
    </div>
  </div>
</template>

<script lang="ts" src="./calc-top.ts"></script>
