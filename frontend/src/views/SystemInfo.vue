<template>
  <div>
    <h1>System Info</h1>
    <div class="card-container">
      <SystemInfoCard
        v-for="(element, k) in systemInfo" :key="k"
        :title="k"
        :value="element">
      </SystemInfoCard>
    </div>  
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SystemInfoCard from '../components/SystemInfoCard.vue'

export default defineComponent({
  components: { SystemInfoCard },
  mounted() {
    this.$store.dispatch('getSystemInfo')
  },
  computed: {
    systemInfo() {
      console.log(this.$store.state.system)
      return this.$store.state.system
    }
  }
})
</script>

<style>
.card-container{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>