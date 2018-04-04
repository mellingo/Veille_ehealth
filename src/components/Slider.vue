<template>
      <carousel ref="carousel" :perPage="1" class="carousel" :navigateTo="currentPage" paginationColor="grey" paginationActiveColor="white">
        <slide v-for="slide in slides" :content="slide" :key="slide.title">
        </slide>
        <navigation @navigationclick="changePage"></navigation>
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
      currentPage: 0
    }
  },
  computed: {
    /*indexForMonths() {
      this.months = uniq(this.slides.map(slide => slide.date.getMonth()));
      return this.months.map(
        month => {
          return {
            name: this.monthName(month),
            index: this.slides.findIndex(slide => slide.date.getMonth() === month),
            month: month+1
          }
        }
      )
    }*/
  },
  mounted () {
    this.$watch(
      () => {
        return this.$refs.carousel.offset
      },
      () => { //change page after drag
        this.changePage(this.$refs.carousel.offset/this.$refs.carousel.slideWidth)
      }
    )
  },
  methods: {
    changePage(item) {
      return this.currentPage = item;
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
