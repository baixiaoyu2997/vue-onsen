<template>
  <v-ons-page class="HitMoviePage">
    <index-header :city="city.value"></index-header>
    <v-ons-tabbar
      tab-border
      swipeable
      position="top"
      :tabs="tabs"
      :visible="true"
      class="selectTabbar"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import indexHeader from 'components/headerSearch/indexHeader';
  import HitMovieList from './HitMovieList';
  export default {
    name: 'HitMoviePage',
    components: {
      indexHeader,
      HitMovieList,
    },
    data() {
      return {
        hitMovieUrl: "v2/movie/in_theaters?city=",
        comingSoonUrl: "v2/movie/coming_soon?city="
      }
    },
    computed: {
      city() {
        return this.$store.state.selectPage.city;
      },
      tabs() {
        return [{
          label: '正在热映',
          page: HitMovieList,
          props: {
            url: this.hitMovieUrl
          }
        }, {
          label: '即将上映',
          page: HitMovieList,
          props: {
            url: this.comingSoonUrl
          }
        }]
      }
    },
    methods: {
      push(page) {
        this.$store.commit("navigator/push", page)
      }
    },
    watch: {
      headerColOne() {
        this.headerColTwo = !this.headerColOne;
      },
      headerColTwo() {
        this.headerColOne = !this.headerColTwo;
      }
    }
  }
</script>

<style lang="scss">
.HitMoviePage {
  .page__background {
    background: #fff !important;
  }
  .page__content {
    background: #fff !important;
  }
  .selectTabbar {
    top: 38px !important;
    .tabbar__label {
      color: #929292;
      font-size: 17px;
    }
    .active .tabbar__label {
      color: #2d2d2d;
    }
    .tabbar__border {
      background: #2d2d2d;
    }
  }
}
</style>
