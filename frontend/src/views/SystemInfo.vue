<template>
    <div>
        <h1>System Info</h1>
        <li v-for="(element, k) in systemInfo" :key="k">
          <b>{{k}}:</b> {{ element }}
        </li>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    this.$store.dispatch('getSystemInfo')
  },
  computed: {
    systemInfo() {
      return this.$store.state.system
    }
  }
})
</script>

<style>
li {
  font-size: 28px;
}
</style>