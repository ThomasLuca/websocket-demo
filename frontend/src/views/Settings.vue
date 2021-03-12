<template>
    <div>
      <h1>Settings</h1>
      <div style="text-align: left; margin: 0 18%;">
        <h3>Wanted Temperature</h3>
        <h3>Wanted Temperature Range</h3>
        <h3>Brightness</h3>
        <div class="slidecontainer">
          <input type="range" min="0" max="255" class="slider" step="5" v-model="brightness">
          <p>{{ brightness }}</p>
        </div>
        <h3>Display Speed</h3>
        <div class="slidecontainer">
          <input type="range" min="0" max="0.150" class="slider" step="0.005" v-model="displaySpeed">
          <p>{{ displaySpeed }}</p>
        </div>
        <h3>Rotation</h3>
        <button @click="submitSettings">Submit Settings</button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      brightness: 255,
      displaySpeed: 0.075,
    }
  },
  mounted() {
    this.$store.dispatch('getSettings')
  },
  computed: {
    settingsData() {
      return this.$store.state.settings
    }
  },
  methods: {
    submitSettings(){
      console.log("submitting") 
      this.$store.dispatch('postSettings', {"settings": {"brightness": this.brightness, "display_speed": this.displaySpeed}})
    }
  },
})
</script>

<style>
.slider {
  height: 0px;
}
</style>