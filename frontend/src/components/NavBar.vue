<template>
    <nav class="navbar">
      <div class="wrapper">
        <ul>
          <li><router-link to="/">Sensors</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
          <li><router-link to="/system-info">Info</router-link></li>
          <li id="identifier"> ⚡ {{hostname}}</li>
        </ul> 
      </div>
    </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        hostname: String
    }
})
</script>

<style>
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
</style>
