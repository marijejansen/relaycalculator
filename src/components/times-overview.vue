 <template>
  <div>
    <div class="times-top">
      <div>
        <button>&lt; &lt; Back to search</button>
      </div>

      <div class="switch-container">
        <div v-bind:class="{active: !isShortCourse}">long course</div>
        <label class="switch">
          <input type="checkbox" v-model="isShortCourse" />
          <span class="slider"></span>
        </label>
        <div v-bind:class="{active: isShortCourse}">short course</div>
      </div>

      <div>
        <button>>> Next</button>
      </div>
    </div>

    <div class="container">
      <div class="results">

        <span class="row">
          <div class="name">Name</div>
          <div v-for="distance in distancesShort"
            v-bind:key="distance">{{distance}}
          </div>
        </span> 

        <swimmer-times
          v-for="swimmer in selectedSwimmers"
          :key="swimmer.id"
          :swimmer-data="swimmer"
          :course="course"
        ></swimmer-times>

      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./times-overview.ts">
</script>
