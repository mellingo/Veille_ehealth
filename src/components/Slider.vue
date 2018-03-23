<template>
  <div class="slider">
    <slide v-for="(slide, index) in slides" :slideContent="slide" :key="slide.title" :show="index === showingSlide" :id="index" @moveTo="changeSlide"></slide>
  </div>
</template>

<script>
import Slide from '@/components/slide';
import slidesData from '@/assets/data';

export default {
  name: 'Slider',
  components: {
    Slide
  },
  data () {
    return {
      showingSlide: 0
    }
  },
  computed: {
    slides: () => {
      return slidesData.map(slide => Object.assign({}, slide, {date: new Date(slide.date)})).sort( (slideA, slideB) => slideA.date - slideB.date);
    }
  },
  methods: {
    changeSlide(id) {
      if (id < this.slides.length ){
        this.showingSlide = id;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
