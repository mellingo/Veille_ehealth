<template>
  <div>
    <ul id="menu">
      <li v-for="item in options.anchors" :data-menuanchor="'#'+item" :class="{'currentMonth':currentMonth==='#'+item}"><a :href="'#'+item">
        <div class="horizontal-line"></div>
        <div>{{item}}</div></a></li>
    </ul>
    <full-page :options="options" @after-load="afterLoad">
      <div class="section" v-for="month in months">
        <slider :slides="slidesByMonth(month)" ref="slider"></slider>
      </div>
    </full-page>
  </div>
</template>

<script>
  import slidesData from '@/assets/data';
  import Slider from '@/components/Slider.vue'
  import {isNumber, uniq, throttle} from 'lodash';
  import FullPage from 'vue-fullpage.js/src/FullPage.vue';

  export default {
    name: 'SliderContainer',
    components: {
      Slider,
      FullPage
    },
    data() {
      return {
        options: {
          scrollBar: false,
          menu: '#menu',
          navigation: false,
          anchors: [],
          sectionsColor: []
        },
        slides: slidesData.map(slide => Object.assign({}, slide, {date: new Date(slide.date)})).sort( (slideA, slideB) => slideA.date - slideB.date),
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      }
    },
    computed: {
      months() {
        return uniq(this.slides.map(slide => slide.date.getMonth()));
      },
      currentMonth() {
        this.initSliders();
        return this.$route.hash;
      }
    },
    methods: {
      slidesByMonth(month) {
        return this.slides.filter(slide => slide.date.getMonth() === month);
      },
      afterLoad() { //workaround to update page correctly
        document.body.style.height = "auto";
        let wrapper = document.getElementsByClassName("fullpage-wrapper")[0];
        let height = document.getElementsByClassName("section")[0].style.height;
        let heightNumber = height.substr(0, height.indexOf("p"));
        let factor = this.options.anchors.indexOf(this.$route.hash.substr(1));
        wrapper.style.transform = `translate3d(0px,-${factor*heightNumber}px,0px)`;
      },
      initSliders() {
        for(let i = 0; i < this.$refs.slider.length; i++) {
          this.$refs.slider[i].changePage(0);
        }
      }
    },
    mounted () {
      this.options.anchors = uniq(this.slides.map(slide => slide.date.getMonth())).map(month => this.monthNames[month]);
      this.options.sectionsColor = uniq(this.slides.map(slide => slide.date.getMonth())).map(month => "midnightblue");
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #menu {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 20%;
    text-align: left;
  }

  #menu li a {
    text-decoration: none;
    color: transparent;
    display: flex;
    align-items: center;
  }

  #menu li a:hover {
    color: white;
  }

  #menu .currentMonth a {
    color: white;
  }

  a:hover .horizontal-line {
    width: 70px;
  }

  .currentMonth .horizontal-line {
    width: 70px;
  }

  .horizontal-line {
    height: 3px;
    width: 50px;
    background-color: white;
    margin-right: 5px;
    transition: width .5s;
  }
</style>
