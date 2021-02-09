<template>
  <h1>IoT Apps demo</h1>
  <h4>Hostname: {{hostname}}</h4>
  <p>Counter: {{counter}}</p>
  <button class="btn" @click="resetCounter">Reset Counter</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {

  },
  data() {
    return {
      connection: null as null | WebSocket,
      hostname: "-",
      counter: 0,
      url:"",
      port:""
    }
  },
  mounted() {
    this.url = process.env.VUE_APP_HOSTNAME
    this.port = process.env.VUE_APP_PORT
    console.log(`connectet to: ws://${this.url}:${this.port}`)
    this.connection = new WebSocket(`ws://${this.url}:${this.port}`)
    this.connection.onmessage = (packet) => {
      const message = JSON.parse(packet.data)
      console.log(message)

      switch(message.message) {
        case 'hostname':
          this.hostname = message.value
          break;
        case 'counter':
          this.counter = message.value
          break
      }
    }
  },
  methods: {
    resetCounter() {
      this.connection?.send('reset')

    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
