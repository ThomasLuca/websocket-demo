<template>
  <h1>Sensors</h1>
  <div v-if="sensorValues" class="sensorValues">
    <SensorVisual 
      :value="sensorValues.temperature" 
      unit="°C"
      :maximum="50"
      color="#40FF3F"
      icon="🌡️"
    />
    <SensorVisual 
      :value="sensorValues.pressure" 
      unit="hPa"
      :maximum="1100"
      :minimum="900"
      icon="⬇️"
    />
    <SensorVisual 
      :value="sensorValues.humidity" 
      unit="%"
      color="#FF473F"
      icon="🌫️"
    />
  </div>
  <div class="sensor-graphs" v-if="sensorChart">
    <apexchart 
      width="90%"
      type="line"
      :options="{...options, colors: ['#40FF3F'], title: {text: 'temperature'}}"
      :series="[{name: 'temperature', data: tempChart}]">
    </apexchart>
    <apexchart 
      width="90%"
      type="line"
      :options="{...options, colors: ['#3f79ff'], title: {text: 'Pressure'}}"
      :series="[{name: 'pressure', data: pressureChart}]">
    </apexchart>
    <apexchart 
      width="90%"
      type="line"
      :options="{...options, colors: ['#FF473F'], title: {text: 'Humidity'}}"
      :series="[{name: 'Humidity', data: humidityChart}]">
    </apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SensorVisual from '@/components/SensorVisual.vue'
export default defineComponent({
  components: { SensorVisual },
  data() {
    return {
      options: {
        chart: {
          height: 230,
          foreColor: "#2c3e50",
          toolbar: { autoSelected: "pan", show: false}
        },
        zoom: {enabled: false },
        stroke: { width: 3 },
        grid: {
          borderColor: "#555",
          clipMarkers: false,
          yaxis: { lines: { show: false } }
        },
        dataLabels: { enabled: false },
        markers: { size: 1, strokeColor: "black", strokeWidth: 3},
        tooltip: { theme: "dark" }
      }
    }
  },
  computed: {
    tempChart(){
      return this.$store.state.sensorsHistory.temperature
    },
    pressureChart(){
      return this.$store.state.sensorsHistory.pressure
    },
    humidityChart(){
      return this.$store.state.sensorsHistory.humidity
    },
    sensorChart(){
      return this.$store.state.sensorsHistory
    },
    sensorValues() {
      return this.$store.state.sensors
    }
  }
})
</script>

<style scoped>
.sensorValues {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.sensor-graphs > div > div{
  margin-left: auto;
  margin-right: auto;
}
</style> 