<template>
  <div class="VueCarousel-navigation">
    <div class="VueCarousel-dot-container">
      <div
        class="VueCarousel-dot"
        v-bind:class="{ 'VueCarousel-dot--active': (page.month === parentContainer.currentMonth) }"
        v-for="page in parentContainer.indexForMonths"
        v-on:click="goToPage(page.index)"
        :style="`
          margin-top: ${parentContainer.paginationPadding * 2}px;
          padding: ${parentContainer.paginationPadding}px;
        `"
      >
        <div
          class="VueCarousel-dot-inner"
          :style="`
            width: ${parentContainer.paginationSize}px;
            height: ${parentContainer.paginationSize}px;
            color: ${(page.month === parentContainer.currentMonth) ? 'cornflowerblue' : 'midnightblue'};
          `"
        >
          {{page.name}}
          <div class="vertical-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navigation",
    data() {
      return {
        parentContainer: this.$parent
      };
    },
    methods: {
      goToPage(index) {
        this.$emit("navigationclick", index);
      }
    }
  };
</script>

<style scoped>
  .VueCarousel-navigation {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
  }

  .VueCarousel-dot-container {
    display: inline-block;
    margin: 0 auto;
  }

  .VueCarousel-dot {
    float: left;
    cursor: pointer;
  }

  .vertical-line {
    width: 2px;
    height: 100px;
    background-color: cornflowerblue;
  }

  .VueCarousel-dot-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .VueCarousel-dot-inner:hover {
    color: white;
  }

  .VueCarousel-dot-inner:hover>.vertical-line {
    background-color: white;
  }
</style>
