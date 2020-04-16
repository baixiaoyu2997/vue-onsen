<template>
  <v-ons-page class="searchPage">
    <div class="content">
      <div class="header">
        <v-ons-search-input
          v-model="searchValue"
          placeholder="搜索电影 / 电视剧 / 影人"
          class="search"
          @keyup.13="doSearch"
        ></v-ons-search-input>

        <v-ons-icon
          v-if="searchValue"
          @click="searchValue=''"
          icon="ion-ios-close-empty,material:md-close"
          size="2x"
          class="clearSearch"
        ></v-ons-icon>
        <v-ons-button @click="back" modifier="quiet" ripple="false">取消</v-ons-button>
      </div>
      <div class="body">
        <v-ons-row
          v-if="!searchValue && searchHistoryArr && searchHistoryArr.length>0"
          class="searchHistory"
        >
          <v-ons-row class="searchHistory__title">
            <v-ons-col>搜索历史</v-ons-col>
            <v-ons-col class="title--right" @click="searchHistoryClear" width="2em">清除</v-ons-col>
          </v-ons-row>
          <div class="searchHistory__main">
            <v-ons-row class="searchHistory__item">
              <v-ons-col
                :width="searchHistoryArr.length==1?'100%':'50%'"
                v-for="(item,index) in searchHistoryArr"
                :key="index"
                @click="quickSearch(item)"
              >{{item}}</v-ons-col>
            </v-ons-row>
          </div>
        </v-ons-row>
        <v-ons-row v-if="searchMovieList.length>0" class="searchMovie">
          <v-ons-row class="searchMovie__title">
            <v-ons-col>影视</v-ons-col>
          </v-ons-row>
          <v-ons-row class="searchMovieList">
            <v-ons-row
              v-for="item in searchMovieList"
              :key="item.id"
              class="searchMovieList__item"
              :id="item.id"
              @click="toDetailPage(item.id)"
            >
              <v-ons-col width="60px" class="item__left">
                <img :src="item.images.small" />
              </v-ons-col>
              <v-ons-col class="item__right">
                <div v-html="movieName(item.title)" class="movieName"></div>
                <div
                  class="movieDetail"
                >{{item.rating.average==0?"暂无评":item.rating.average}}分/{{item.year}}</div>
              </v-ons-col>
              <v-ons-ripple modifier="light-gray" size="contain"></v-ons-ripple>
            </v-ons-row>
          </v-ons-row>
          <v-ons-row class="searchMovie__moreVideo" @click="doSearch">
            <v-ons-col vertical-align="center">查看更多视频</v-ons-col>
            <v-ons-col vertical-align="center" width="18px">
              <v-ons-icon icon="ion-ios-arrow-forward,material:md-chevron-right" size="lg"></v-ons-icon>
            </v-ons-col>
            <v-ons-ripple modifier="light-gray" size="contain"></v-ons-ripple>
          </v-ons-row>
        </v-ons-row>
        <Loading v-if="searchValue&&searchMovieList.length===0" />
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import searchPage2 from "./searchPage2";
import Loading from "components/Loading.vue";
import detailPage from "./detailPage";
import { debounce } from "throttle-debounce";
export default {
  name:'searchPage',
  components:{
    Loading
  },
  data() {
    return {
      url: "v2/movie/search?q=",
      searchValue: "",
      searchMovieList: [],
      searchHistoryArr: JSON.parse(localStorage.getItem("searchHistoryArr"))
    };
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/HitMoviePage") {
      this.searchValue = "";
    }
    next();
  },
  created() {
    this.debounceLoadList=debounce(800,this.loadList)
  },
  watch: {
    searchValue() {
      if (this.searchValue == "") {
        this.searchMovieList = [];
      } else {
        this.debounceLoadList(this.searchValue);
      }
    }
  },
  methods: {
    loadList(v) {
      if (v == "") return;
      let that = this;
      this.$http.jsonp(that.url + v).then(
        response => {
          if (that.searchValue == "") return; //防止删除搜索字段太快导致返回的数据覆盖空数据
          that.searchMovieList = response.body.subjects;
        },
        err => {
          console.error(err.message||'系统异常，请稍后再试');
        }
      );
    },
    movieName(v) {
      return "<div>" + (v.indexOf(this.searchValue) > 0)
        ? v.replace(
            new RegExp(this.searchValue, "gm"),
            "<span>" + this.searchValue + "</span>"
          )
        : v + "</div>";
    },
    back() {
      this.$store.commit("navigator/pop");
    },
    searchHistoryClear() {
      this.searchHistoryArr = [];
      localStorage.clear();
    },
    doSearch() {
      this.saveSearch();
      let that = this;
      this.$store.commit("navigator/push", {
        extends: searchPage2,
        data() {
          return {
            searchValue: that.searchValue
          };
        }
      });
    },
    saveSearch() {
      let searchHistoryArr =
        JSON.parse(localStorage.getItem("searchHistoryArr")) || [];
      let index = searchHistoryArr.indexOf(this.searchValue);
      if (index != "-1") {
        searchHistoryArr.splice(index, 1);
      }
      searchHistoryArr.unshift(this.searchValue);
      if (searchHistoryArr.length > 4) {
        searchHistoryArr.length = 4;
      }
      localStorage.setItem(
        "searchHistoryArr",
        JSON.stringify(searchHistoryArr)
      );
      this.searchHistoryArr = JSON.parse(
        localStorage.getItem("searchHistoryArr")
      );
    },
    quickSearch(v) {
      this.searchValue = v;
    },
    toDetailPage(id) {
      this.saveSearch();
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
.header {
  position: fixed;
  background-color: #40be55;
  padding: 8px;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  ons-button {
    color: #fff;
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
    background: #f0f1ec;
    color: #9b9c97;
  }
  .searchMovieList {
    &__item {
      padding: 10px 17px 15px;
    }
  }
  .item__left {
    img {
      width: 45px;
      height: 63px;
    }
  }
  .item__right {
    .movieName {
      font-size: 18px;
      color: #464646;
    }
    .movieDetail {
      font-size: 12px;
      color: #9e9e9e;
      margin-top: 11px;
    }
  }
  &__moreVideo {
    height: 49px;
    font-size: 13px;
    color: #848484;
    border-top: 1px solid #e7e7e7;
    padding: 0 17px;
  }
}

.search {
  flex: 1;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  & /deep/ .search-input {
    height: 35px;
    padding: 0 40px;
    font-size: 16px;
    box-shadow: none;
  }
  & /deep/ input::-webkit-input-placeholder {
    font-size: 16px;
    line-height: 1;
  }
}

.content {
  display: flex;
  flex-direction: column;
  padding-top: 56px;
}

.movieName {
  span {
    color: #40be55;
  }
}
</style>
