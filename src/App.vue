<meta name="viewport" content="width=device-width,initial-scale=1" />
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App'
}

</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
body{
  margin: 0 auto;
  padding: 0;
}
html,body,#app{
  height: 100%;
  width: 100%;
}
</style>
