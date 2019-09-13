import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

import Vue from "vue";
import Vuex from "vuex";
import VueOnsen from "vue-onsenui";
import "./utils/resource.js";
import store from "./store/";
import vueScroll from "vue-scroll";
import loading from "./components/loading.vue";
import AppNavigator from "./AppNavigator.vue";

Vue.use(Vuex);
Vue.use(VueOnsen);
Vue.use(vueScroll);

Vue.component("loading", loading);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { AppNavigator },
  template: "<AppNavigator/>",
  store,
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();
  }
});
