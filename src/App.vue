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
  components: { PopUp },
  created () {
    let fa = document.createElement('script')
    fa.setAttribute('src', 'https://use.fontawesome.com/releases/v5.0.10/js/all.js')
    fa.setAttribute('integrity', 'sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+')
    fa.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(fa)
  },
}
</script>

<style>
  @font-face {
    font-family: folk;
    src: url(./assets/Folks-Bold.ttf);
  }
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
