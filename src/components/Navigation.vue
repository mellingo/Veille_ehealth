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
            color: ${(page.month === parentContainer.currentMonth) ? 'white' : 'transparent'};
          `"
        >
          <div class="horizontal-line" :style="`width: ${(page.month === parentContainer.currentMonth) ? '70px' : '50px'};`"></div>
          {{page.name}}
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
    position: absolute;
    left: 0;
    top: 20%;
    z-index: 10;
  }

  .VueCarousel-dot-container {
    display: block;
    margin: 0 auto;
  }

  .VueCarousel-dot {
    cursor: pointer;
  }

  .VueCarousel-dot-inner {
    display: flex;
    align-items: center;
  }

  .VueCarousel-dot-inner:hover {
    color: white;
  }

  .horizontal-line {
    height: 3px;
    width: 50px;
    background-color: white;
    margin-right: 5px;
  }
</style>
