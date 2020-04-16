<template>
  <v-ons-page :infinite-scroll="loadMore">
    <div v-show="items.length>0" class="content">
      <v-ons-pull-hook :action="firstLoadItem" @changestate="state = $event.state">
        <span v-show="state === 'initial'">上拉刷新</span>
        <span v-show="state === 'preaction'">放开刷新</span>
        <span v-show="state === 'action'">加载中...</span>
      </v-ons-pull-hook>
      <v-ons-list>
        <v-ons-list-item
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          modifier="longdivider"
          size="contain"
          tappable
          @click="toDetailPage(item.id)"
        >
          <div class="left">
            <img :src="item.images.medium" :onerror="defaultImg" />
          </div>
          <div class="center">
            <div class="center__title">{{item.title}}</div>
            <div class="center__details">
              <rating :rating="item.rating" class="details__score">
                <span slot="rating__text">{{item.rating.average}}</span>
              </rating>
              <div v-if="item.directors.length>0">导演：{{item.directors["0"].name}}</div>
              <div v-if="item.casts.length>0">
                主演：
                <span
                  v-for="(item,index) in item.casts"
                  :key="index"
                >{{index!=0?" / ":""}}{{item.name}}</span>
              </div>
            </div>
            <span class="center__watch">{{item.collect_count}}人看过</span>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
    <div v-show="items.length===0">
      <Loading />
    </div>
  </v-ons-page>
</template>
<script>
import rating from "components/rating";
import Loading from "components/Loading";
import detailPage from "../detailPage.vue";
export default {
  // name:'HitMovieList', 添加name后，v-ons-tabbar组件渲染同一个组件时vue会报错（https://github.com/OnsenUI/OnsenUI/issues/2471#issuecomment-404078584）
  props: ["url"],
  components:{
    Loading,
    rating
  },
  data() {
    return {
      state: "initial",
      items: [],
      start: 0,
      count: 20,
      total: 0,
      defaultImg: "this.src='" + require("@/assets/movie_default.png") + "'"
    };
  },
  computed: {
    city() {
      this.items = [];
      return this.$store.state.selectPage.city.value;
    }
  },
  watch: {
    city: {
      handler() {
        if (this.city == "") return;
        this.firstLoadItem();
      },
      deep: true
    }
  },
  methods: {
    loadMore(done) {
      let that = this;
      if (that.start == "-1") {
        done();
        return;
      }
      this.loadList(undefined, done);
    },
    firstLoadItem(done) {
      this.loadList("0", done);
    },
    loadList(s, done) {
      let that = this;
      this.$http
        .jsonp(
          that.url +
            that.city +
            "&start=" +
            (s || that.start * 20) +
            "&count=" +
            that.count
        )
        .then(
          response => {
            that.total = response.body.total;
            if (s == 0) {
              that.items = response.body.subjects;
              that.start = 1;
              if (done) done();
            } else {
              that.start++;
              that.items = that.items.concat(response.body.subjects);
              if (done) done();
            }
            if (response.body.total <= that.start * 20) {
              that.start = "-1";
            }
          },
          err => {
            console.error(err.message||'系统异常，请稍后再试');
          }
        );
    },
    toDetailPage(id) {
      this.$store.commit("navigator/push", {
        extends: detailPage,
        data() {
          return {
            id
          };
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
ons-button {
  border-color: #f67986;
  color: #f67986;
}

ons-list-item {
  padding-left: 0;
  width: 100%;
  height: 164px;
}

.left {
  padding: 18px 16px 0 15px;
  align-items: flex-start;
  flex: none;
}

img {
  width: 86px;
  height: 124px;
}

.center {
  flex-direction: column;
  padding: 24px 16px 0 0;
  align-items: flex-start;
  line-height: 100%;
  flex-wrap: nowrap;
  &__title {
    font-size: 18px;
    color: #464646;
    font-weight: bold;
  }

  &__details {
    font-size: 12px;
    color: #9b9b9b;
    flex: none;
    .details__score {
      margin: 7px 0;
    }
  }

  &__watch {
    // margin-top: 5px;
    font-size: 14px;
    margin-top: 10px;
    color: #464646;
  }
}
</style>
