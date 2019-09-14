<template>
  <div class="header">
    <div class="selectItem" @click="push(selectCityPage)">
      <span class="selectCity">{{city}}</span>
      <v-ons-icon icon="ion-ios-arrow-down,material:md-chevron-down" class="icon--down"></v-ons-icon>
    </div>
    <v-ons-search-input
      readonly
      placeholder="电影 / 电视剧 / 影人"
      @click="push(searchPage)"
      class="ons-search-input"
    ></v-ons-search-input>
  </div>
</template>
<script>
import searchPage from "@/pages/searchPage.vue";
import selectCityPage from "components/headerSearch/selectCityPage.vue";

export default {
  name: "indexHeader",
  props: ["city"],
  data() {
    return {
      searchPage,
      selectCityPage
    };
  },
  methods: {
    push(page) {
      this.$store.commit("navigator/push", page);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 5px 17px 0;
  text-align: center;
  background-color: #fff !important;
  a {
    flex: 1;
  }
  .selectItem {
    display: flex;
    align-items: center;
    width: 60px;
  }
  .icon--down {
    color: #9b9b9b;
    margin: 0 5px;
  }
  .selectCity {
    color: #3d3d3d;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.ons-search-input {
  width:100%;
  height:28px;
  overflow-y:hidden;
  & /deep/ input::-webkit-input-placeholder {
    text-align: center;
    font-size: 16px;
    line-height: 1;
  }
  & /deep/ .search-input {
    border:none;
    border-radius: 0;
    height: 100%;
    font-size: 16px;
    background-position: 20% center;
  }
}
</style>
