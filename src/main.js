// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import Vuex from "Vuex"
import VueOnsen from 'vue-onsenui'
import VueResource from 'vue-resource'
import AppNavigator from './AppNavigator.vue'
import loading from "./pages/loading.vue"
import storeLike from "./store.js"
import vueScroll from "vue-scroll"

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueOnsen)
Vue.use(VueResource)
Vue.use(vueScroll)

Vue.component("loading", loading)

new Vue({
  el: '#app',
  render: h=>h(AppNavigator),
  store: new Vuex.Store(storeLike),
  data: {
    commonURL: "https://api.douban.com",
  },
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid()
  }
})