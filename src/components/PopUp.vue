<template>
    <div class="pop-up">
        <transition name="fade">
            <div class="overlay"
                 v-show="active">
                <div class="container"
                     :class="{ scrollable: !startText }">
                    <div class="month"
                         v-for="(month, index) in articles"
                         v-if="!startText">
                        <p class="delimiter">{{ displayMonth(months[index]) }}</p>
                        <div class="article"
                           v-for="article in month">
                            <a :href="article.link">
                                {{ article.title }}
                            </a>
                        </div>
                    </div>
                    <transition name="fade">
                        <div @click="active = !active" v-show="!startText">
                            <img class="icon btn" src="../../static/images/Picto_dossier.png" v-if="!active"/>
                            <div v-if="active">
                              <i class="fas fa-times icon btn"></i>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </transition>
            <div @click="active = !active">
                <i class="fas fa-list icon btn"
                   v-if="!startText">
                </i>
            </div>
    </div>
</template>

<script>
  import articles from '../assets/data.js'

  export default {
    name: 'PopUp',
    data () {
      return {
        startText: true,
        active: true,
        articles: [],
        months: []
      }
    },
    mounted () {
      this.sortByMonth()
    },
    methods: {
      sortByMonth () {
        let months = this.months
        articles.forEach(a => {
          const m = new Date(a.date).getMonth()
          if (!months.includes(m)) {months.push(m)}
        })
        for (let i = 0; i < months.length; i++) {
          let arr = []
          articles.forEach(a => {
            const m = new Date(a.date).getMonth()
            if (months[i] === m) {arr.push(a)}
          })
          this.articles.push(arr)
        }
      },
      displayMonth (index) {
        const monthNames =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return monthNames[index]
      },
      closeStartText () {
        this.startText = !this.startText;
        this.active = !this.active;
      }
    }
  }
</script>

<style scoped>
    .white {
        color: #fff;
    }
    .pop-up {
        position:fixed;
        right: 0;
        top:0;
        z-index:999999999;
    }
    .btn {
        position:relative;
        width: 30px;
        height: 30px;
        margin: 20px 20px 0 0;
        color: #fff;
        transition:all 0.3s ease;
        cursor:pointer;
    }
    .overlay {
        position: fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background: #5FB195;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    .container {
        width: calc(100% + 20px);
        max-width: 720px;
        max-height: calc(100vh - 40px);
    }
    .scrollable {
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .month {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        flex-flow: row wrap;
    }
    .article {
        flex-grow: 1;
        width: 50%;
        max-width: 350px;
        padding: 6px;
        box-sizing: border-box;
    }
    .article a {
        display: block;
        text-align: left;
        text-decoration: none !important;
        text-transform: uppercase;
        color: #fff;
        font-size: 17px;
        line-height:17px;
        transition:all 0.3s ease;
    }
    .article a:hover,
    .btn:hover {
        opacity: 0.7;
    }
    .delimiter {
        color: #fff;
        font-weight:900;
        width:100%;
        text-align: left;
        padding: 25px 6px 5px 6px;
        font-family: folk, sans-serif;
    }
    .title {
        font-family: folk, sans-serif;
        font-size: 24px;
    }
    .container-spaced {
      display: inline-block;
      margin-bottom: 24px;
    }
    .s-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 24px auto 0 auto;
        width: 40px;
        height: 40px;
        font-size: 24px;
        border-radius:50%;
        background: #fff;
        transition: all 0.3s ease;
        border: 2px solid #fff;
        cursor: pointer;
    }
    .s-btn .icon {
        color: #5FB195;
        transition: all 0.3s ease;
        height: 24px;
    }
    .s-btn:hover {
        background: #5FB195;
    }
    .s-btn:hover .icon {
        color: #fff;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    @media screen and (max-width: 700px) {
        .month {
            justify-content: center;
        }
        .delimiter {
            max-width: 350px;
        }
        .article {
            width: 100%;
        }
    }
</style>
