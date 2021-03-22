<template>
    <div v-if="sensorValues">
        <h1>Sensors</h1>
        <p>🌡️ Temperature: {{sensorValues.temperature}}°C</p>
        <p>🌫️ Humidity: {{sensorValues.humidity}}%</p>
        <p>⬇️ Pressure: {{sensorValues.pressure}}hPa</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  computed: {
    sensorValues() {
      return this.$store.state.sensors
    }
  }
})
</script> 
