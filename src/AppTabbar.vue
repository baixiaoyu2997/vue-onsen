<template>
  <v-ons-page :style="swipePosition">
    <v-ons-tabbar position="bottom"  :tabs="tabs" :index.sync="index" tab-border=false></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import HitMoviePage from './pages/HitMoviePage.vue';
import FindVideo from "./pages/FindVideo.vue"

export default {
  data() {
    return {
      animationOptions: {},
      topPosition: 0,
      tabs: [
        {
          label: '热映',
          icon: 'ion-ios-book',
          activeIcon:"md-face",
          page: HitMoviePage,
          key:"HitMoviePage"
        },
        {
          label: '找片',
          icon: 'ion-ios-eye',
          page: FindVideo,
          key:"FindVideo"
        }
      ]
    };
  },
  computed: {
    index: {
      get() {
        return this.$store.state.tabbar.index;
      },
      set(newValue) {
        
        this.$store.commit('tabbar/set', newValue)
      }
    },
    title() {
      return this.md ? 'Onsen UI' : this.tabs[this.index].title || this.tabs[this.index].label;
    },
    swipeTheme() {
      return this.md && {
        backgroundColor: `rgb(${this.colors.join(',')})`,
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    },
    swipePosition() {
      return this.md && {
        top: this.topPosition + 'px',
        transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
      }
    }
  }
};
</script>

<style>
/* Custom 'white-content' modifier */

/* .page--material .toolbar--white-content__center,
.page--material .toolbar-button--white-content,
.page--material :checked+.tabbar--white-content__button {
  color: white;
}

.page--material .tabbar--white-content__button {
  color: rgba(255, 255, 255, 0.7);
}

.page--material .tabbar--white-content__border {
  background-color: white;
} */
.tabbar{
  border-top: 1px solid #e4e4e4;
}
.tabbar__border{
  background-color: initial;
}
</style>
