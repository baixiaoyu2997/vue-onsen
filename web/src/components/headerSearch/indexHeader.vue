<template>
  <div class="header">
    <div class="selectItem" @click="push(selectCityPage)">
      <span class="selectCity">{{city}}</span>
      <v-ons-icon icon="ion-ios-arrow-down,material:md-chevron-down" class="icon--down"></v-ons-icon>
    </div>
    <input
      type="search"
      placeholder="电影 / 电视剧 / 影人"
      readonly
      class="search-input"
      @click="push(searchPage)"
    />
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
    width: 75px;
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

.search-input {
  background-position: 24% center;
  flex: 1;
}

input::-webkit-input-placeholder {
  text-align: center;
  font-size: 16px;
}
</style>
