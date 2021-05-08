<template>
  <div>
    <NavBar :hostname="hostname"/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    hostname() {
      return this.$store.state.hostname
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
}


.container{
  width: 80%;
}

p, a{
  font-size: 32px;
}

* , button{
  font-family: 'Fira Sans';
}

button{
  border-radius: 45px;
  box-shadow: 5px;
}

</style>
