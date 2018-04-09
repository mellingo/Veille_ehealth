<template>
  <div class="VueCarousel-slide">
    <div class="slide_container">
      <div class="slide_inner">
        <div class="slide_inner_up">
          <img :src="content.image" alt="test" height="80%"/>
        </div>
        <div class="slide_inner_down">
          <a :href="content.link" class="slide_title">{{content.title}}</a>
          <p class="slide_description">{{content.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slide",
    props: ["content"],
    data() {
      return {
        width: null
      };
    },
    mounted() {
      if (!this.$isServer) {
        this.$el.addEventListener("dragstart", e => e.preventDefault());
      }
    }
  };
</script>

<style>
  .VueCarousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    color: white;
  }
  .slide_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slide_inner {
    width: 100%;
  }
  .slide_inner_up {
    height: 55vh;
    background-color: #5FB195;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .slide_inner_up>img {

  }
  .slide_inner_down {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
  }
  .slide_title {
    text-decoration: none;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 2em;
    color: white;
    display: block;
    margin: 10px;
  }
  .slide_description {
    display: block;
    max-width: 30%;
    text-align: justify;
  }
  .slide_tags>li {
    display: inline-block;
    margin: 0 10px;
    font-style: italic;
  }
</style>
