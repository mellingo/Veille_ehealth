<template>
    <div class="pop-up">
        <transition name="fade">
            <div class="overlay"
                 v-show="active">
              <div :class="{ scrollable: !startText }">
                <div class="container">
                    <div class="month"
                         v-for="(month, index) in articles"
                         v-if="!startText">
                        <p class="delimiter">{{ displayMonth(months[index]) }}</p>
                        <div class="article"
                           v-for="article in month">
                            <a :href="article.link" target="_blank">
                                {{ article.title }}
                            </a>
                        </div>
                    </div>
                    <div class="sources white" v-if="!startText">
                      <span class="semi-bold">Sources :</span>
                      <a href="http://www.courrierdelouest.fr">http://www.courrierdelouest.fr</a>
                      <a href="http://www.erenumerique.fr">http://www.erenumerique.fr</a>
                      <a href="http://www.europe1.fr">http://www.europe1.fr</a>
                      <a href="https://www.fiercebiotech.com/">https://www.fiercebiotech.com</a>
                      <a href="https://www.franceinter.fr">https://www.franceinter.fr</a>
                      <a href="https://www.futura-sciences.com">https://www.futura-sciences.com</a>
                      <a href="https://globenewswire.com">https://globenewswire.com</a>
                      <a href="https://itunes.apple.com">https://itunes.apple.com</a>
                      <a href="http://www.lefigaro.fr">http://www.lefigaro.fr</a>
                      <a href="https://medcitynews.com">https://medcitynews.com</a>
                      <a href="http://www.mobihealthnews.com">http://www.mobihealthnews.com</a>
                      <a href="https://www.objetconnecte.net">https://www.objetconnecte.net</a>
                      <a href="https://www.prnewswire.com">https://www.prnewswire.com</a>
                      <a href="https://www.sciencesetavenir.fr">https://www.sciencesetavenir.fr</a>
                      <a href="http://www.wired.co.uk">http://www.wired.co.uk</a>
                    </div>
                    <transition name="fade">
                      <div v-if="startText">
                        <p class="white container-spaced"><span class="title container-spaced">Welcome! Does connected health interest you? Are you wondering what the doctor or hospital of tomorrow will look like? This is a website for you that recents the innovations of today!</span><br>During 2017-2018, some diseases benefit from more active research and innovative solutions to assist the patient. Researchers are very insterested in Diabetes and patient’s datas. Today, there are few significant innovations in the field of connected health. However, small revolutions are at work on a daily basis to improve the patient's life. This period of discovery is promising and should intensify in the future. The creation of a university health degree at Paris Diderot has already opened and promises a bright future for connected health !</p>
                        <div class="s-btn" @click="closeStartText">
                        <i class="fas fa-chevron-right icon"></i>
                        </div>
                      </div>
                    </transition>
                </div>
              </div>
            </div>
        </transition>
          <div @click="active = !active" v-show="!startText">
            <img class="icon btn" src="../../static/images/Picto_dossier.png" v-if="!active"/>
            <div v-if="active">
              <i class="fas fa-times icon btn"></i>
            </div>
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
  a, a:hover {
    text-decoration: none;
    color:#fff;
    transition:all 0.3s ease;
  }
  a {
    float: left;
    clear: both;
  }
  a:hover {
    opacity: 0.7;
  }
  .semi-bold {
    font-weight: 600;
  }
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
        min-height:100vh;
        background: #5FB195;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    .container {
        max-width: 720px;
    }
    .sources {
      padding: 20px 0 40px 0;
      text-align: left;
      overflow: hidden;
    }
    .sources > span {
      float: left;
      clear: both;
    }
    .scrollable {
        overflow-y: scroll;
        overflow-x: hidden;
        width: 100%;
        display: flex;
        justify-content: center;
        max-height: 100vh;
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
