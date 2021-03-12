<template>
  <div>
    <nav class="navbar">
      <div class="wrapper">
        <ul>
          <li><router-link to="/">Sensors</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
          <li><router-link to="/system-info">Info</router-link></li>
          <li id="identifier"> ⚡ {{hostname || 'not connected'}}</li>
        </ul> 
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
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
.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #2C3E50;
}

.navbar li , .navbar li > *{
  display: inline;
  float: left;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 28px;
}

#identifier {
  color: #2C3E50;
  float: right;
  cursor: default;
  background-color: #26A69A;
}

.container{
  width: 80%;
}

p, a{
  font-size: 32px;
}

</style>
