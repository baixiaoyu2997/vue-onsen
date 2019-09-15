import Vue from "vue";
import Vuex from "vuex";
import VueOnsen from "vue-onsenui";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {}
      },
      mutations: {
        push(state, page) {
          state.stack.push(page);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        }
      }
    },
    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    },
    selectPage: {
      strict: true,
      namespaced: true,
      state: {
        city: {
          value: localStorage.getItem("city") || "北京",
          trueValue: false
        },
        BaiDuMapUrl: "https://api.map.baidu.com/geocoder/v2/",
        ak: "inNtxrDqUe6De9bosxvTV3sVaRGt5sGh"
      },
      mutations: {
        changeCity(state, payload) {
          localStorage.setItem("city", payload.value);
          state.city = {
            value: payload.value,
            trueValue: payload.trueValue
          };
        }
      },
      actions: {
        getMobPosition({ commit }) {
          let errorFn = function() {
            commit("changeCity", {
              value: "北京",
              trueValue: false
            });
            VueOnsen.notification.toast("自动定位失败，您可以手动设置位置", {
              timeout: 2000
            });
          };
          if (typeof cordova === "undefined") {
            errorFn();
            return;
          }
          cordova.plugins.baidumap_location.getCurrentPosition(function(
            result
          ) {
            let city = result.city;
            if (city.lastIndexOf("市") == city.length - 1) {
              city = city.substring(0, city.length - 1);
            }
            commit("changeCity", {
              value: city,
              trueValue: true
            });
          },
          errorFn);
        },
        getH5Position({ state, commit }) {
          // 基本不能使用，由于使用了google服务会直接跳到error
          navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            timeout: 1000
          });
          function onSuccess(position) {
            Vue.http
              .jsonp(
                state.BaiDuMapUrl +
                  "?location=" +
                  position.coords.latitude +
                  "," +
                  position.coords.longitude +
                  "&output=json&pois=1&ak=" +
                  state.ak
              )
              .then(response => {
                let res = response.body;
                let city = res.result.addressComponent.city;
                if (city.lastIndexOf("市") == city.length - 1) {
                  city = city.substring(0, city.length - 1);
                }
                commit("changeCity", {
                  value: city,
                  trueValue: true
                });
              });
          }

          function onError() {
            commit("changeCity", {
              value: "北京",
              trueValue: false
            });
            VueOnsen.notification.toast("自动定位失败，您可以手动设置位置", {
              timeout: 2000
            });
          }
        }
      }
    }
  }
});
