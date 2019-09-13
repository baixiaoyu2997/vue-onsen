<template>
  <v-ons-page class="hitMoviePage">
    <index-header :city="city.value"></index-header>
    <v-ons-tabbar tab-border swipeable position="top" :tabs="tabs" :visible="true" class="selectTabbar">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
  import indexHeader from 'components/headerSearch/indexHeader';
  import hitMovieList from './HitMovieList';
  export default {
    name: 'HitMoviePage',
    data() {
      return {
        hitMovieUrl: "/v2/movie/in_theaters?city=",
        comingSoonUrl: "/v2/movie/coming_soon?city=",
        ak: "inNtxrDqUe6De9bosxvTV3sVaRGt5sGh",
        BaiDuMapUrl: "https://api.map.baidu.com/geocoder/v2/"
      }
    },
    created() {
      this.getPosition();
    },
    computed: {
      city() {
        return this.$store.state.selectPage.city;
      },
      tabs() {
        return [{
          label: '正在热映',
          page: hitMovieList,
          props: {
            url: this.hitMovieUrl
          }
        }, {
          label: '即将上映',
          page: hitMovieList,
          props: {
            url: this.comingSoonUrl
          }
        }]
      }
    },
    methods: {
      push(page) {
        this.$store.commit("navigator/push", page)
      },
      getPosition() {
        var that = this;

        var options = {
          timeout: 1000,
        }

        var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

        function onSuccess(position) {
          that.$http.jsonp(that.BaiDuMapUrl + "?location=" + position.coords.latitude + "," + position.coords.longitude +
            "&output=json&pois=1&ak=" + that.ak).then((response) => {
            let res = response.body;
            let city = res.result.addressComponent.city;
            if (city.lastIndexOf("市") == city.length - 1) {
              city = city.substring(0, city.length - 1)
            }
            that.$store.commit("selectPage/changeCity", {
              value: city,
              trueValue: true
            })
          }, (err) => {
            console.log(err);
          })
        };

        function onError(error) {
          that.$store.commit("selectPage/changeCity", {
            value: "北京",
            trueValue: false
          })
          that.$ons.notification.toast("自动定位失败，您可以手动设置位置", {
            timeout: 2000
          });
        }
      }
    },
    watch: {
      headerColOne() {
        this.headerColTwo = !this.headerColOne;
      },
      headerColTwo() {
        this.headerColOne = !this.headerColTwo;
      }
    },
    components: {
      indexHeader,
      hitMovieList,
    }
  }

</script>

<style lang="scss">
  .hitMoviePage {
    .page__background {
      background: #fff !important;
    }
    .page__content {
      background: #fff !important;
    }
    .selectTabbar {
      top: 33px !important;
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
