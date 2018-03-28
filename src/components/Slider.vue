<template>
    <div class="page_container">
      <carousel ref="carousel" :perPage="1" class="carousel" :paginationEnabled="false" :navigateTo="currentPage">
        <slide v-for="slide in slides" :content="slide">
        </slide>
      </carousel>
      <navigation @navigationclick="changePage($event)"></navigation>
    </div>
</template>

<script>
import slidesData from '@/assets/data';
import { Carousel } from 'vue-carousel';
import Navigation from "@/components/Navigation.vue";
import Slide from "@/components/Slide.vue";
import {isNumber, uniq} from 'lodash';

export default {
  name: 'Slider',
  components: {
    Slide,
    Carousel,
    Navigation
  },
  data () {
    return {
      slides: slidesData.map(slide => Object.assign({}, slide, {date: new Date(slide.date)})).sort( (slideA, slideB) => slideA.date - slideB.date),
      currentPage: 0,
      currentMonth: 0,
      months: [],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  },
  computed: {
    indexForMonths() {
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
    }
  },
  mounted () {
    this.currentMonth = this.slides[0].date.getMonth()+1;
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
      if (isNumber(item)) {
        this.currentMonth = this.slides[item].date.getMonth()+1;
        return this.currentPage = item;
      }
      //this.currentPage = 2;
    },
    monthName(month) {
      return this.monthNames[month];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .carousel {
    width: 100vw;
    height: 60vh;
  }

</style>
