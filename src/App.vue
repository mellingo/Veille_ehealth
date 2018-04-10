<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <pop-up></pop-up>
  </div>
</template>

<script>
  import PopUp from './components/PopUp.vue'
export default {
  name: 'App',
  components: { PopUp }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
