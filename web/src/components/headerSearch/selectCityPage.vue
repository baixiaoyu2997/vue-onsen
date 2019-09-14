<template>
  <v-ons-page class="selectCityPage">
    <v-ons-toolbar modifier="noshadow">
      <div class="left">
        <v-ons-back-button class="back-button"></v-ons-back-button>
      </div>
      <div class="center">选择城市</div>
    </v-ons-toolbar>
    <div class="middleBlock">
      <template v-if="positionCity">
        <div class="cityItemLabel">GPS定位城市</div>
        <v-ons-col width="28.9%" class="noMargin" @click="selectCity('GPS')" :name="positionCity">
          <v-ons-icon class="icon--location" icon="ion-location"></v-ons-icon>
          <span>{{positionCity}}</span>
        </v-ons-col>
      </template>
      <div class="cityItemLabel">热门城市</div>
      <v-ons-row class="hotCityItem">
        <v-ons-col
          @click="selectCity(item.name)"
          width="28.9%"
          v-for="(item,index) in hotCity"
          :key="item.id"
          :class="index>11?'noMargin':''"
        >{{item.name}}</v-ons-col>
      </v-ons-row>
    </div>
    <div class="bottomBlock">
      <v-ons-list modifier="noborder">
        <v-ons-lazy-repeat :render-item="renderItem" :length="pinyinCityList.length"></v-ons-lazy-repeat>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
import Vue from "vue";
import city from "@/assets/city.json";
export default {
  name: "selectCityPage",
  data() {
    return {
      hotCity: [],
      pinyinCityList: [],
      modalVisible: false,
      scrollFixed: {
        first: true,
        top: 0,
        headerIdNumber: 0
      }
    };
  },
  created() {
    this.getCity();
    this.pinyinCityList = city.result.map(function(x, y) {
      if (y == 0) {
        x.first = true;
      } else if (city.result[y - 1].key != x.key) {
        x.first = true;
      }
      return x;
    });
  },
  computed: {
    hotCityUrl() {
      return "v2/loc/list";
    },
    positionCity() {
      return (
        this.$store.state.selectPage.city.trueValue &&
        this.$store.state.selectPage.city.value
      );
    }
  },
  methods: {
    getCity() {
      var that = this;
      that.$http.jsonp(that.hotCityUrl).then(
        response => {
          let res = response.body;
          that.hotCity = (res.locs.length = 15) && res.locs;
        },
        err => {
          console.log(err);
        }
      );
    },
    renderItem(i) {
      const that = this;
      return new Vue({
        template: `<v-ons-list-item :key="index" @click="selectCity2(${i})" modifier="longdivider">${that.getListItem(
          i
        )}</v-ons-list-item>`,
        data() {
          return {
            index: i
          };
        },
        methods: {
          selectCity2(i) {
            if (event.target.className == "listRowHeader") return;
            that.$store.commit("selectPage/changeCity", {
              value: that.pinyinCityList[i].city,
              trueValue: false
            });
            that.$store.commit("navigator/pop");
          }
        }
      });
    },
    getListItem(i) {
      const that = this;
      const list = that.pinyinCityList;
      let listItem = "";
      let border = "listRow--border";
      if (list[i].first) {
        border = "";
        listItem = `<v-ons-row class='listRowHeader' id="${"header" + (i + 1)}">
                      ${list[i].key}
                    </v-ons-row>`;
      }
      listItem += `<v-ons-row class='listRow ${border}'>
                      ${list[i].city}
                   </v-ons-row>`;
      return listItem;
    },
    selectCity(v) {
      if (v != "GPS") {
        this.$store.commit("selectPage/changeCity", {
          value: v,
          trueValue: false
        });
      }
      this.$store.commit("navigator/pop");
    }
  }
};
</script>
<style lang="scss">
.selectCityPage {
  .page__content {
    background-color: #f4f4f4 !important;
  }
  .back-button__icon {
    fill: #37b950;
  }
  ons-toolbar {
    background: #fff;
    border-bottom: 1px solid #e9e9e9;
    .toolbar__title {
      color: #3b3b3b;
    }
    ons-icon {
      color: #fff;
    }
    .back-button {
      color: #37b950;
    }
    .center {
      text-align: left;
      ons-icon {
        vertical-align: middle;
      }
    }
  }

  .middleBlock {
    padding: 0 5px;
    .cityItemLabel {
      padding: 10px 0 10px 5px;
      font-size: 14px;
      color: #999;
    }
    ons-col {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 18px;
      padding: 14px 0;
      background-color: #fff;
      font-size: 15px;
    }
    .noMargin {
      margin-bottom: 0;
    }
    .icon--location {
      color: #3fbd54;
      margin-right: 8px;
    }
    .hotCityItem {
      justify-content: space-between;
    }
  }
  .search__row {
    position: fixed;
    height: 51px;
    align-items: center;
    background-color: #fff;
    z-index: 999;
    ons-search-input {
      flex: 1;
      .search-input {
        background-color: inherit;
        box-shadow: none;
      }
    }
  }
  .bottomBlock {
    .list {
      background-color: #f9f9f9;
    }
  }
  .listRowHeader {
    background-color: #f4f4f4;
  }
  .listRow {
    background-color: #fff;
    padding: 17px 0 17px 5px;
    &Header {
      color: #999;
      padding: 10px 0 10px 5px;
    }
    &--border {
      border-top: 1px solid #efefef;
    }
  }
}
</style>
