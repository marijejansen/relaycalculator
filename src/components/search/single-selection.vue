     <template>
  <span class="row" v-bind:class="{loaded: timesLoaded}">
    <div class="name">{{swimmer.firstName}} {{swimmer.lastName}}</div>
    <div class="club">{{swimmer.clubName}}</div>
    <div class="year">{{swimmer.birthYear}}</div>
    <div class="remove" @click="removeSwimmer()">X</div>
  </span>
</template>

<script lang="ts" src="./single-selection.ts">
</script>