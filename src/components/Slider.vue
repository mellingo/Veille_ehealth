<template>
      <carousel ref="carousel" :perPage="1" class="carousel" paginationColor="grey" paginationActiveColor="white" :speed="speed">
        <slide v-for="slide in slides" :content="slide" :key="slide.title">
        </slide>
        <navigation></navigation>
      </carousel>
</template>

<script>
import { Carousel} from 'vue-carousel';
import Navigation from '@/components/Navigation.vue';
import Slide from "@/components/Slide.vue";
import {isNumber, uniq} from 'lodash';

export default {
  name: "slider",
  props: ["slides"],
  components: {
    Slide,
    Carousel,
    Navigation
  },
  data () {
    return {
      speed: 500
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .carousel {
    width: 100vw;
    height: 100vh;
  }
</style>
