<template>
  <div class="page_container" @wheel.preventDefault="handleScroll">
    <nav class="main_nav">
      <ul>
        <li v-for="month in months" @click="switchToMonth(month)" :class="{'currentMonth':currentMonth===month}">
          <div class="horizontal-line"></div>
          {{ monthNames[month] }}
        </li>
      </ul>
    </nav>
    <slider :slides="slidesByMonth(currentMonth)" ref="slider"></slider>
  </div>
</template>

<script>
  import slidesData from '@/assets/data';
  import Slider from '@/components/Slider.vue'
  import {isNumber, uniq, throttle} from 'lodash';

  export default {
    name: 'SliderContainer',
    components: {
      Slider
    },
    data () {
      return {
        slides: slidesData.map(slide => Object.assign({}, slide, {date: new Date(slide.date)})).sort( (slideA, slideB) => slideA.date - slideB.date),
        currentMonth: 0,
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        fired: false
      }
    },
    computed: {
      months() {
        return uniq(this.slides.map(slide => slide.date.getMonth()));
      }
    },
    methods: {
      slidesByMonth(month) {
        return this.slides.filter(slide => slide.date.getMonth() === month);
      },
      switchToMonth(month) {
        this.currentMonth = month;
        this.$refs.slider.changePage(0);
      },
      handleScroll(e) {
        if (!this.fired) {
          let direction = e.deltaY > 0 ? 1:-1;
          let value = this.months.indexOf(this.currentMonth)+direction;
          if (value >= 0 && value <= this.months.length-1 ) {
            this.switchToMonth(this.months[value]);
          }
          return this.fired = true;
        } else if (e.deltaY === -1 || e.deltaY === 1) {
          return this.fired = false;
        }
      }
    },
    mounted () {
      this.currentMonth = this.slides[0].date.getMonth();
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
  }
  .main_nav {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 20%;
    text-align: left;
  }
  .main_nav li {
    display: flex;
    align-items: center;
    color: transparent;
  }

  .main_nav .currentMonth {
    color: white;
  }

  .currentMonth .horizontal-line {
    width: 70px;
  }

  .horizontal-line {
    height: 3px;
    width: 50px;
    background-color: white;
    margin-right: 5px;
  }
</style>
