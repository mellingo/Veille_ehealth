<template>
  <transition name="slide-fade">
    <div class="slide" v-if="show" draggable="true" @dragstart="startX = $event.x" @dragend="dragEnding" :id="id">
      {{ slideContent.title }}
      {{ slideContent.tags }}
      {{ slideContent.description }}
    </div>
  </transition>
</template>

<script>
export default {
  props: ['slideContent', 'show', 'id'],
  name: 'Slide',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      startX: 0
    }
  },
  methods: {
    dragEnding(event) {
      if (event.x > this.startX) { //go back in time
        if (this.id !== 0) {
          this.$emit("moveTo", this.id-1);
        }
      } else if (event.x < this.startX) { //go further in time
        this.$emit("moveTo", this.id+1);
      } else { //do nothing
        console.log("same")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide {
    height: 100vh;
    width: 100vw;
    background-color: cornflowerblue;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
