<template>
  <div class="VueCarousel-slide">
    <div class="slide_container">
      <div class="slide_inner">
        <span class="slide_date">{{content.date | formatDate}}</span>
        <p class="slide_description">{{content.description}}</p>
        <a :href="content.link" class="slide_title">{{content.title}}</a>
        <ul class="slide_tags">
          <li v-for="tag in content.tags">{{tag}}</li>
        </ul>
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
    },
    filters: {
      formatDate(date) {
        return date.getDate() + "/" + (date.getMonth()+1)
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
    width: 50%;
    height: 60vh;
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
  .slide_date {
    color: darkgray;
    opacity: .8;
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 4em;
  }
  .slide_description {
    max-width: 30%;
    text-align: left;
  }
  .slide_tags>li {
    display: inline-block;
    margin: 0 10px;
    font-style: italic;
  }
</style>
