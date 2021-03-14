<template>
    <div>
      <h1>Settings</h1>
      <div style="text-align: left; margin: 0 12%;">
        <h3>Wanted Temperature</h3>
        <div class="slidecontainer">
          <input type="range" min="0" max="60" class="slider" step="5" v-model="wantedTemperature">
          <p>{{ wantedTemperature }}°C</p>
        </div>
        <h3>Wanted Temperature Range</h3>
        <div class="slidecontainer">
          <input type="range" min="0" max="5" class="slider" step="0.1" v-model="wantedTemperatureRange">
          <p>{{ wantedTemperatureRange }}°C</p>
        </div>
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
        <h3>Text direction</h3>
        <div class="rotations">
          <button @click="changeDirection(0)">→</button>
          <button @click="changeDirection(90)">↓</button>
          <button @click="changeDirection(180)">←</button>
          <button @click="changeDirection(270)">↑</button>
          <p>{{ rotation }}°</p>
        </div>
        <button @click="submitSettings" id="submit">Submit Settings</button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      wantedTemperature: "36.0",
      wantedTemperatureRange: "1.0",
      brightness: "255",
      displaySpeed: "0.075",
      rotation: 180,
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
      this.$store.dispatch('postSettings', 
      {
        "settings": 
        {
          "wanted_temperature": parseInt(this.wantedTemperature),
          "wanted_temperature_range": parseFloat(this.wantedTemperatureRange),
          "brightness":  parseInt(this.brightness), 
          "display_speed": parseFloat(this.displaySpeed), 
          "rotation": this.rotation
        }
      })
    },
    changeDirection(angle: number){
      this.rotation = angle;
    }
  },
})
</script>

<style>
.slider {
  height: 85px;
}

.rotations{
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
.rotations > button {
  font-size: 45px;
}
.slidecontainer {
  display: flex;
}
#submit {
  margin-bottom: 50px;
  font-size: 30px;
  
}

</style>