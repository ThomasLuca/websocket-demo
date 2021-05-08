<template>
    <div>
      <h1>Settings</h1>
      <div class="settings-container">
        <SettingsSlider @update-data="updateWantedTemperature" 
          title="Wanted Temperature"
          min="0" max="60" step="1"
          unit="°C"
          :initialValue="wantedTemperature"
        />
        <SettingsSlider @update-data="updatewantedTemperatureRange" 
          title="Wanted Temperature Range"
          min="0" max="5" step="0.1"
          unit="°C"
          :initialValue="wantedTemperatureRange"
        />
        <SettingsSlider @update-data="updateBrightness" 
          title="Brightness"
          min="0" max="255" step="5"
          unit=""
          :initialValue="brightness"
        />
        <SettingsSlider @update-data="updateDisplaySpeed" 
          title="Display Speed" min="0" max="0.150" 
          unit="" 
          step="0.005" 
          :initialValue="displaySpeed"
        />
        <h4>Text direction</h4>
        <div class="rotations">
          <div class="rotation-buttons">
            <button @click="changeDirection(0)">→</button>
            <button @click="changeDirection(90)">↓</button>
            <button @click="changeDirection(180)">←</button>
            <button @click="changeDirection(270)">↑</button>
          </div>
          <p>{{ rotation }}°</p>
        </div>
      </div>
      <button @click="submitSettings" id="submit">Submit Settings</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SettingsSlider from '../components/SettingsSlider.vue'
export default defineComponent({
  components: {
    SettingsSlider
  },
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
    },
    updateWantedTemperature(value: string){
      this.wantedTemperature = value
    },
    updateWantedTemperatureRange(value: string){
      this.wantedTemperatureRange = value
    },
    updateBrightness(value: string){
      this.brightness = value
    },
    updateDisplaySpeed(value: string){
      this.displaySpeed = value
    }
  },
})
</script>

<style>
.settings-container{
  text-align: left; 
  margin: 0 12%;
}

.rotations{
  display: grid;
  grid-template-columns: 90% auto;
  height: 45px;
  margin-bottom: 40px;
}

.rotation-buttons{
  display: flex;
  justify-content: space-around;
}

.rotations button {
  grid-column-start: 1;
  height: 45px;
  width: 72px;
  font-size: 24px;
}

.rotations p {;
  grid-column-start: 2;
  font-size: 24px;
  margin: auto;
}

#submit {
  margin-bottom: 50px;
  font-size: 30px;
  width: 50%;
  height: 50px;
}
</style>