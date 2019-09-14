<template>
  <v-ons-page class="searchPage" :infinite-scroll="loadMore">
    <div class="content">
      <div class="header">
        <v-ons-search-input
          type="search"
          v-model="searchValue"
          placeholder="搜索电影 / 电视剧 / 影人"
          class="search"
          @keyup.13="doSearch"
          transparent
        >
          <input class="search-input" />
        </v-ons-search-input>
        <v-ons-icon
          v-if="searchValue"
          @click="searchValue=''"
          icon="ion-ios-close-empty,material:md-close"
          size="2x"
          class="clearSearch"
        ></v-ons-icon>
        <v-ons-button @click="back" modifier="quiet" ripple="false">取消</v-ons-button>
      </div>
      <div v-show="searchMovieList.length>0" class="body">
        <v-ons-row v-if="searchMovieList.length>0" class="searchMovie">
          <v-ons-row class="searchMovie__title">
            <v-ons-col v-if="searchTotal">共{{searchTotal}}个电影</v-ons-col>
          </v-ons-row>
          <v-ons-row class="searchMovieList">
            <v-ons-row
              v-for="item in searchMovieList"
              :key="item.id"
              class="searchMovieList__item"
              :id="item.id"
              @click="toDetailPage(item.id)"
            >
              <v-ons-col width="79px" class="item__left">
                <img :src="item.images.small" />
              </v-ons-col>
              <v-ons-col class="item__right">
                <div class="movieName">{{item.title}}</div>
                <rating :rating="item.rating" class="details__score">
                  <span slot="rating__text" class="score__number">{{item.rating.average}}</span>
                </rating>
                <div v-if="item.directors.length>0">导演：{{item.directors["0"].name}}</div>
                <div v-if="item.casts.length>0">
                  主演：
                  <span
                    v-for="(item,index) in item.casts"
                    :key="index"
                  >{{index!=0?" / ":""}}{{item.name}}</span>
                </div>
              </v-ons-col>
              <v-ons-ripple modifier="light-gray" size="contain"></v-ons-ripple>
            </v-ons-row>
          </v-ons-row>
        </v-ons-row>
      </div>
      <loading v-show="searchMovieList.length===0"></loading>
    </div>
  </v-ons-page>
</template>

<script>
import rating from "components/rating";
import detailPage from "./detailPage";
export default {
  name: "searchPage2",
  data() {
    return {
      url: "/v2/movie/search?q=",
      searchMovieList: [],
      searchTotal: "",
      start: 0,
      count: 20,
      destroy: false
    };
  },
  created() {
    if (this.searchValue) {
      this.doSearch();
    }
  },
  methods: {
    loadList(done) {
      let that = this;
      if (that.searchValue == "") return;
      this.$http
        .jsonp(
          that.url +
            that.searchValue +
            "&start=" +
            that.start * 20 +
            "&count=" +
            that.count
        )
        .then(
          response => {
            that.start += 1;
            that.searchMovieList = that.searchMovieList.concat(
              response.body.subjects
            );
            that.searchTotal = response.body.total;
            if (done) done();
            if (response.body.total <= that.start * 20) {
              that.start = "-1";
            }
          },
          err => {
            console.error(err.message);
          }
        );
    },
    loadMore(done) {
      if (this.start == "-1") {
        done();
        return;
      }
      this.loadList(done);
    },
    back() {
      this.$store.commit("navigator/pop");
    },
    doSearch() {
      this.start = 0;
      this.searchMovieList = [];
      this.loadList();
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
  },
  components: {
    rating
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  padding: 8px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e1e1;
  background: #fff;
  ons-button {
    color: #8f8f8f;
    font-size: 16px;
    background-color: transparent;
    box-shadow: none;
  }
  .clearSearch {
    position: absolute;
    height: 32px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 2.5em;
    color: #d9d9d9;
  }
}

.body {
  flex: 1;
  background: #f0f1ec;
}

.searchHistory {
  flex-direction: column;
  align-items: flex-start;
  &__title {
    font-size: 14px;
    padding: 20px 17px 15px;
    background: #f0f1ec;
    color: #9b9c97;
    .title--right {
      text-align: right;
      color: #494a47;
    }
  }
  &__main {
    width: 100%;
  }
  &__item {
    border-bottom: 1px solid #f6f6f6;
    color: #171717;
    & > ons-col {
      background: #fff;
      padding: 20px 17px 15px;
      &:nth-of-type(odd) {
        border-right: 1px solid #f6f6f6;
      }
    }
  }
}

.searchMovie {
  background: #fff;
  &__title {
    font-size: 14px;
    padding: 20px 17px 15px;
    color: #9b9c97;
    border-bottom: 1px solid #f1f1f1;
  }
  .searchMovieList {
    &__item {
      padding: 10px 17px 15px;
      border-bottom: 1px solid #e7e7e7;
    }
  }
  .item__left {
    img {
      width: 64px;
      height: 92px;
    }
  }
  .item__right {
    font-size: 12px;
    color: #9b9b9b;
    .movieName {
      font-size: 18px;
      color: #464646;
    }
    .details__score {
      margin: 7px 0;
    }
  }
}

.search {
  flex: 1;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  .search-input {
    height: 35px;
    box-shadow: none;
  }
}

input::-webkit-input-placeholder {
  font-size: 16px;
  color: #c8c8c8;
}

.content {
  display: flex;
  flex-direction: column;
  padding-top: 57px;
}
</style>
