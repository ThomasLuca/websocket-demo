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
      icon="🌫️"
    />
    <SensorVisual 
      :value="sensorValues.humidity" 
      unit="%"
      color="#FF473F"
      icon="⬇️"
    />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SensorVisual from '@/components/SensorVisual.vue'
export default defineComponent({
  components: { SensorVisual },
  computed: {
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
</style> 